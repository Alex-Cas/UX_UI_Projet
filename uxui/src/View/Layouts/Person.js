import React, { Component } from 'react'
import {Button, Input, Form, Container, Card,
    CardBody, CardTitle, Col, Row, CardImg,
    FormGroup, Label} from 'reactstrap'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Personnel.js'
import maintenanceModel from '../../Model/Maintenances.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Person extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.personId)
        this.state = {
            person: model.get(id),
            maintenances: maintenanceModel.list('person', id),
            isUpdating: false,
            newPerson: {
                firstName: '',
                surname: '',
                age: 0,
                fonction: '',
                salary: 0
            },
            isEditing: false

        }
    }

    fire = () => {

        model.delete(this.state.person.id)
    }

    toggleUpdate = () => {
        
        this.setState({isUpdating: !this.state.isUpdating})
        console.log(this.state.person)
    }

    toggleEdit = () => {

        this.setState({isEditing: !this.state.isEditing})
    }

    submitUpdate = (event) => {

        var obj = {
                id: this.state.person.id,
                firstName: this.state.newPerson.firstName,
                surname: this.state.newPerson.surname,
                age: this.state.newPerson.age,
                fonction: this.state.newPerson.fonction,
                salary: this.state.newPerson.salary
            }

        var e = model.update(obj)
        console.log(e)
        this.setState({person: model.get(this.state.person.id)})
        event.preventDefault()
    }

    handleChange = (event) => {

        this.state.newPerson[event.target.name] = event.target.value
        this.forceUpdate()
    }

    displayForm = () => {

        if (this.state.isUpdating) {
            return (
                <Form>
                    first name: <Input type="text" name="firstName" value={this.state.newPerson.firstName} onChange={this.handleChange} placeholder="new first name"/>
                    surname: <Input type="text" name="surname" value={this.state.newPerson.surname} onChange={this.handleChange} placeholder="new surname"/>
                    age: <Input type="number" name="age" value={this.state.newPerson.age} onChange={this.handleChange} placeholder="new age"/>
                    fonction: <Input type="text" name="fonction" value={this.state.newPerson.fonction} onChange={this.handleChange} placeholder="new fonction"/>
                    salary: <Input type="number" name="salary" value={this.state.newPerson.salary} onChange={this.handleChange} placeholder="new salary"/>

                    <Button onClick={this.submitUpdate}>Submit</Button>
                </Form>)
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
                </Card>
            </Container>
        )
    }

    renderEditProfile = () => {

        var person = this.state.person

        return (
            <Container className="pt-5">
                <Card body style={{'maxWidth': '75%'}} className="m-auto">
                    <Row>
                        <Col xs={12} sm={4} md={4}>
                            <CardImg style={{'maxWidth': '150px', 'minWidth': '80px'}} alt="Photo de profil" src={require("../../img/"+ String(person.id % 8 + 1) +".png")} />
                        </Col>
                        <Col xs={12} sm={7} md={7} className="text-center">
                            <Row form>
                                <Col sm={6}>
                                    <FormGroup>
                                        <Label className="float-left">Prénom</Label>
                                        <Input onChange={this.handleChange} type="text" name="firstName" placeholder={person.firstName} />
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                <FormGroup>
                                    <Label className="float-left">Nom de famille</Label>
                                    <Input onChange={this.handleChange} type="text" name="surname" placeholder={person.surname} />
                                </FormGroup>
                                </Col>


                            </Row>
                            <div className="text-left">
                                Biographie: <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi eros, gravida ut purus eu, egestas convallis libero. Phasellus fringilla nec nunc non ornare. Nulla sit amet posuere eros. Vestibulum id risus quis est lobortis vehicula. Nulla mattis leo vitae sagittis tristique. Maecenas arcu sapien, ullamcorper eu pretium sit amet, iaculis lobortis metus.
                            </div>
                        </Col>
                        <Button onClick={this.toggleEdit} style={{'top': '10px', 'right': '10px', 'position': 'absolute', 'width' :'38px'}} color="success">
                            <FontAwesomeIcon icon="check"/>
                        </Button>
                        <Button onClick={this.toggleEdit} style={{'top': '55px', 'right': '10px', 'position': 'absolute', 'width' :'38px'}} color="danger">
                            <FontAwesomeIcon icon="times"/>
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
                </Card>
            </Container>
        )
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
        var person = this.state.person
        var maintenances = this.state.maintenances

        return (
            <div>
                {this.renderProfile()}
                <p>
                    {person.firstName} {person.surname} <br />
                    {person.age} years old <br />
                    Working as {person.fonction} <br />
                    {person.salary}€ per month<br />
                </p>

                <Button onClick={this.fire}>vire moi ce mec</Button>
                <div>
                    Maintenances (ids): 
                    {maintenances.map( (item, idx) => {
                        return (<MaintenanceItem key={idx} maintenance={item}/>)
                    })}
                </div>
                <Button onClick={this.toggleUpdate}>modifie moi ce mec</Button>
                {this.displayForm()}
            </div>
        )
    }
}

export default Person