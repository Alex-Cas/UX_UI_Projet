import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, 
    Button, Form, FormGroup, Label, Input, InputGroup,
    InputGroupAddon, InputGroupText,
    Container, Row, Tooltip} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ask from './Ask.js'
import Confirm from './Confirm.js'


class NewPerson extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            person: {
                firstName: null,
                surname: null,
                age: null,
                salary: null,
                fonction: null
            },
            valid: {
                firstName: true,
                surname: true,
                age: true,
                salary: true,
                fonction: true
            },
            totalValid: false,
            tooltipOpen: false,
            asked: false,
            confirm: false
        }
    }

    toggle = () => {

        this.setState({isOpen: !this.state.isOpen})
    }

    toggleTooltip = () => {

        this.setState({tooltipOpen: !this.state.tooltipOpen})
    }

    toggleAsk = () => {

        this.setState({asked: !this.state.asked})
    }

    toggleConfirm = () => {

        this.setState({confirm: !this.state.confirm})
    }

    handleChange = (event) => {

        var valid = {...this.state.valid}
        var person = {...this.state.person}

        valid[event.target.name] = this.verify(event.target.type, event.target.value)
        person[event.target.name] = event.target.value

        this.setState({valid, person}, () => {this.updateTotalValid()})
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
        var person = {...this.state.person}
        var total = true

        for (let [key, value] of Object.entries(valid)) {

            if (value === false) {

                total = false
            }
        }

        for (let [key, value] of Object.entries(person)) {

            if (value === null) {

                total = false
            }
        }

        this.setState({totalValid: total})
    }

    renderForm = () => {

        return (
            <Form>
                <FormGroup>
                    <Label>Prénom <span className="text-danger">*</span></Label>
                    <Input invalid={this.state.valid.firstName ? false : true} onChange={this.handleChange} type="text" name="firstName" placeholder="Entrez le prénom" />
                </FormGroup>
                <FormGroup>
                    <Label>Nom de famille <span className="text-danger">*</span></Label>
                    <Input invalid={this.state.valid.surname ? false : true} onChange={this.handleChange} type="text" name="surname" placeholder="Entrez le nom de famille"/>
                </FormGroup>
                <FormGroup>
                    <Label>Âge <span className="text-danger">*</span></Label>
                    <Input invalid={this.state.valid.age ? false : true} onChange={this.handleChange} type="number" name="age" placeholder="Entrez l'âge"/>
                </FormGroup>
                <FormGroup>
                    <Label>Salaire <span className="text-danger">*</span></Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>€</InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={this.state.valid.salary ? false : true} onChange={this.handleChange} type="number" name="salary" placeholder="Entre le salaire" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label>Fonction <span className="text-danger">*</span></Label>
                    <Input invalid={this.state.valid.fonction ? false : true} onChange={this.handleChange} type="text" name="fonction" placeholder="Entre la fonction"/>
                </FormGroup>
                <small className="text-danger">* Champs obligatoires</small>
            </Form>
        )
    }

    renderAdd = () => {
        return (
            <div>
                <div id="confirmButton">
                    <Button disabled={this.state.totalValid ? false: true} onClick={this.toggleAsk} color="dark">Ajouter</Button>
                </div>
                <Tooltip placement="top" target="confirmButton" toggle={this.toggleTooltip} isOpen={!this.state.totalValid && this.state.tooltipOpen}>
                    <small>Veuillez remplir tous les champs.</small>
                </Tooltip>
            </div>
        )
    }

    renderAsk = () => {

        if (this.state.asked === true) {

            return (
                <Ask confirm={this.props.handler} item={this.state.person} toggle={this.toggle} toggleAsk={this.toggleAsk} toggleConfirm={this.toggleConfirm} />
            )
        }
    }

    renderConfirm = () => {

        if (this.state.confirm === true) {
            
            return (
                <Confirm ok={this.toggleConfirm} item={this.state.person}/>
            )
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle} color="success"><FontAwesomeIcon icon="plus" />&nbsp; Ajouter un salarié</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader>
                        Ajout de salarié
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            {this.renderForm()}
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        {this.renderAdd()}
                        <Button onClick={this.toggle} color="danger">Annuler</Button>
                    </ModalFooter>
                </Modal>
                {this.renderAsk()}
                {this.renderConfirm()}
            </div>
        )
    }

}

export default NewPerson