import React, { Component } from 'react'
import {Button, Input, Form, Container, Card,
    CardBody, CardTitle, Col, Row, CardImg,
    FormGroup, Label, InputGroup, InputGroupAddon,
    InputGroupText, UncontrolledTooltip} from 'reactstrap'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import AttractionItem from '../Components/AttractionItem.js'
import Ask from '../Components/Modals/Ask.js'
import Confirm from '../Components/Modals/Confirm.js'
import model from '../../Model/Personnel.js'
import maintenanceModel from '../../Model/Maintenances.js'
import attrationsModel from '../../Model/Attractions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Person extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.personId)
        this.state = {
            person: model.get(id),
            maintenances: maintenanceModel.list('person', id),
            attractions: attrationsModel.list(),
            isUpdating: false,
            newPerson: model.get(id),
            valid: {
                firstName: true,
                surname: true,
                salary: true,
                age: true,
                fonction: true
            },
            totalValid: true,
            isEditing: false,
            askCancel: false,
            askSubmit: false,
            confirmSubmit: false,
            seeMaintenance: false
        }
    }

    fire = () => {

        model.delete(this.state.person.id)
    }

    toggleEdit = () => {

        this.setState({isEditing: !this.state.isEditing, newPerson: this.state.person})
    }

    toggleMaintenance = () => {

        this.setState({seeMaintenance: !this.state.seeMaintenance})
    }

    askCancelEdit = () => {

        this.setState({askCancel: true})
    }

    confirmAskCancel = () => {

        this.setState({askCancel: false, isEditing: false})
    }
    
    cancelAskCancel = () => {

        this.setState({askCancel: false})
    }

    askSubmit = () => {

        this.setState({askSubmit: true})
    }

    cancelAskSubmit = () => {

        this.setState({askSubmit: false})
    }

    toggleConfirmSubmit = () => {

        this.setState({confirmSubmit: !this.state.confirmSubmit})
    }

    submitUpdate = (event) => {

        var e = model.update(this.state.newPerson)
        this.setState({person: model.get(this.state.person.id), isEditing: false, askSubmit: false})
    }

    handleChange = (event) => {

        var valid = {...this.state.valid}
        var newPerson = {...this.state.newPerson}

        valid[event.target.name] = this.verify(event.target.type, event.target.value)
        newPerson[event.target.name] = event.target.value

        this.setState({valid, newPerson}, () => {this.updateTotalValid()})
    }

    verify = (type, value) => {

        var toReturn = false
        switch(type) {

            case 'text':
                if (/^[a-zA-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]+$/.test(value)) {
                    toReturn = true
                }
                break

            case 'number':
                if (value > 0) {
                    toReturn = true
                }
        }
        return toReturn
    }

    updateTotalValid = () => {

        var valid = {...this.state.valid}
        var newPerson = {...this.state.newPerson}
        var total = true

        for (let [key, value] of Object.entries(valid)) {

            if (value === false) {

                total = false
            }
        }

        for (let [key, value] of Object.entries(newPerson)) {

            if (value === null) {

                total = false
            }
        }

        this.setState({totalValid: total})
    }

    renderAskCancel = () => {

        if (this.state.askCancel) {

            return (
                <Ask toggleAsk={this.cancelAskCancel} confirm={(blank) => {}} toggle={this.confirmAskCancel} toggleConfirm={() => {}}
                    text="Êtes vous sûr de vouloir quitter la modification ?"/>
            )
        }
    }

    renderAskSubmit = () => {

        if (this.state.askSubmit) {

            return (
                <Ask toggleAsk={this.cancelAskSubmit} confirm={(blank) => {}} toggle={this.submitUpdate} toggleConfirm={this.toggleConfirmSubmit}
                    text="Appliquer les changements à ce profil ?"/>
            )
        }
    }

    renderConfirmSubmit = () => {

        if (this.state.confirmSubmit) {

            return (
                <Confirm ok={this.toggleConfirmSubmit} item={null} text='Ce profil a bien été mis à jour.' />
            )
        }
    }

    renderStaticProfile = () => {
        var person = this.state.person

        return (
            <Container className="pt-5">
                <Card body style={{'maxWidth': '75%'}} className="m-auto">
                    <Row>
                        <Col xs={12} sm={4} md={4}>
                            <CardImg style={{'maxWidth': '150px', 'minWidth': '80px'}} alt="Photo de profil" src={require("../../img/"+ String(person.id % 8 + 1) +".png")} />
                        </Col>
                        <Col xs={12} sm={7} md={7} className="text-center">
                            <CardTitle>{person.firstName} {person.surname}</CardTitle>
                            <div className="text-left">
                                Biographie: <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi eros, gravida ut purus eu, egestas convallis libero. Phasellus fringilla nec nunc non ornare. Nulla sit amet posuere eros. Vestibulum id risus quis est lobortis vehicula. Nulla mattis leo vitae sagittis tristique. Maecenas arcu sapien, ullamcorper eu pretium sit amet, iaculis lobortis metus.
                            </div>
                        </Col>
                        <Button onClick={this.toggleEdit} style={{'top': '10px', 'right': '10px', 'position': 'absolute'}}>
                            <FontAwesomeIcon icon="pen"/>
                        </Button>
                    </Row>
                    <CardBody>
                        <Row className="text-center">
                            <Col xs={4}>
                                <FontAwesomeIcon color="green" icon="money-check-alt" size="lg" /> {person.salary} €
                            </Col>
                            <Col xs={4}>
                                <FontAwesomeIcon icon="user" size="lg" /> {person.age} ans
                            </Col>
                            <Col xs={4}>
                                <FontAwesomeIcon color="blue" icon="briefcase" size="lg" /> {person.fonction}
                            </Col>
                        </Row>
                    </CardBody>
                    <Row className="text-center">
                        <Col xs={12}>
                            <Button onClick={this.toggleMaintenance}>
                                Maintenance
                            </Button>
                        </Col>
                        {this.renderProfileMaintenance()}
                    </Row>
                </Card>
            </Container>
        )
    }

    renderEditProfile = () => {

        var newPerson = this.state.newPerson

        return (
            <Container className="pt-5">
                <Card body style={{'maxWidth': '75%'}} className="m-auto">
                    <Row>
                        <Col xs={12} sm={4} md={4}>
                            <CardImg style={{'maxWidth': '150px', 'minWidth': '80px'}} alt="Photo de profil" src={require("../../img/"+ String(newPerson.id % 8 + 1) +".png")} />
                        </Col>
                        <Col xs={12} sm={7} md={7} className="text-center">
                            <Row form>
                                <Col sm={6}>
                                    <FormGroup id="firstNameInput">
                                        <Input invalid={!this.state.valid.firstName} onChange={this.handleChange} type="text" name="firstName" value={newPerson.firstName} />
                                    </FormGroup>
                                    <UncontrolledTooltip placement="top" target="firstNameInput">
                                        Entrez un prénom
                                    </UncontrolledTooltip>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup id="surnameInput">
                                        <Input invalid={!this.state.valid.surname} onChange={this.handleChange} type="text" name="surname" value={newPerson.surname} />
                                    </FormGroup>
                                    <UncontrolledTooltip placement="top" target="surnameInput">
                                        Entrez un nom de famille
                                    </UncontrolledTooltip>
                                </Col>


                            </Row>
                            <div className="text-left">
                                Biographie: <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi eros, gravida ut purus eu, egestas convallis libero. Phasellus fringilla nec nunc non ornare. Nulla sit amet posuere eros. Vestibulum id risus quis est lobortis vehicula. Nulla mattis leo vitae sagittis tristique. Maecenas arcu sapien, ullamcorper eu pretium sit amet, iaculis lobortis metus.
                            </div>
                        </Col>
                        <Button onClick={this.askCancelEdit} style={{'top': '10px', 'right': '10px', 'position': 'absolute', 'width' :'38px'}} color="danger">
                            <FontAwesomeIcon icon="times"/>
                        </Button>
                        <Button disabled={!this.state.totalValid} onClick={this.askSubmit} style={{'top': '55px', 'right': '10px', 'position': 'absolute', 'width' :'38px'}} color="success">
                            <FontAwesomeIcon icon="check"/>
                        </Button>
                        {this.renderAskCancel()}
                        {this.renderAskSubmit()}
                    </Row>
                    <CardBody>
                        <Row className="text-center">
                            <Col xs={4}>
                                <InputGroup id="salaryInput">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>€</InputGroupText>
                                    </InputGroupAddon>
                                    <Input invalid={!this.state.valid.salary} onChange={this.handleChange} type="number" name="salary" value={newPerson.salary} />
                                </InputGroup>
                                <UncontrolledTooltip placement="top" target="salaryInput">
                                    Entrez un salaire mensuel
                                </UncontrolledTooltip>
                            </Col>
                            <Col xs={4}>
                                <InputGroup id="ageInput">
                                    <Input invalid={!this.state.valid.age} className="text-right" onChange={this.handleChange} type="number" name="age" value={newPerson.age} />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>ans</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                <UncontrolledTooltip placement="top" target="ageInput">
                                    Entrez un âge
                                </UncontrolledTooltip>
                            </Col>
                            <Col xs={4}>
                                <InputGroup id="fonctionInput">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><FontAwesomeIcon icon="briefcase" /></InputGroupText>
                                    </InputGroupAddon>
                                    <Input invalid={!this.state.valid.fonction} onChange={this.handleChange} type="text" name="fonction" value={newPerson.fonction} />   
                                </InputGroup>
                                <UncontrolledTooltip placement="top" target="fonctionInput">
                                    Entrez la fonction
                                </UncontrolledTooltip>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        )
    }
    renderProfileMaintenance = () => {
        var maintenances = this.state.maintenances
        var attractions = this.state.attractions

        if(this.state.seeMaintenance)
        {
            return (
                <div>
                    {maintenances.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <AttractionItem attraction={attractions[item.attraction_id]}/>
                                <MaintenanceItem maintenance={item}/>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    renderProfile = () => {

        if (this.state.isEditing === true) {

            return (
                <div>
                    {this.renderEditProfile()}
                </div>
            )
        }
        else {

            return (
                <div>
                    {this.renderStaticProfile()}
                </div>
            )
        }


    }

    render() {
        return (
            <div>
                {this.renderProfile()}
                {this.renderConfirmSubmit()}
                <Button onClick={this.fire}>vire moi ce mec</Button>
            </div>
        )
    }
}

export default Person