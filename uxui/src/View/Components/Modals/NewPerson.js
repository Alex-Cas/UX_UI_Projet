import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, 
    Button, Form, FormGroup, Label, Input, InputGroup,
    InputGroupAddon, InputGroupText,
    Container, Row, Tooltip} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ask from './Ask.js'


class NewPerson extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
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
            asked: false
        }
    }

    toggleTooltip = () => {

        this.setState({tooltipOpen: !this.state.tooltipOpen})
    }

    toggleAsk = () => {

        this.setState({asked: !this.state.asked})
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

    displayError = (text) => {

        return (
            <small className="row text-danger m-auto">{text}</small>
        )
    }

    renderForm = () => {

        return (
            <Form>
                <FormGroup>
                    <Label>Prénom <span className="text-danger">*</span></Label>
                    { !this.state.valid.firstName 
                        ? this.displayError("Les caractères spéciaux (_ , + * $ ...) ou chiffres ne sont pas autorisés.")
                        : '' }
                    <Input invalid={!this.state.valid.firstName} onChange={this.handleChange} type="text" name="firstName" placeholder="Entrez le prénom" />
                </FormGroup>
                <FormGroup>
                    <Label>Nom de famille <span className="text-danger">*</span></Label>
                    { !this.state.valid.surname 
                        ? this.displayError("Les caractères spéciaux (_ , + * $ ...) ou chiffres ne sont pas autorisés.")
                        : '' }
                    <Input invalid={!this.state.valid.surname} onChange={this.handleChange} type="text" name="surname" placeholder="Entrez le nom de famille"/>
                </FormGroup>
                <FormGroup>
                    <Label>Âge <span className="text-danger">*</span></Label>
                    { !this.state.valid.age 
                        ? this.displayError("L'âge ne peut pas être négatif.")
                        : '' }
                    <Input invalid={!this.state.valid.age} onChange={this.handleChange} type="number" name="age" placeholder="Entrez l'âge"/>
                </FormGroup>
                <FormGroup>
                    <Label>Salaire <span className="text-danger">*</span></Label>
                    { !this.state.valid.salary 
                        ? this.displayError("Le salaire ne peut pas être négatif.")
                        : '' }
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>€</InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={!this.state.valid.salary} onChange={this.handleChange} type="number" name="salary" placeholder="Entrez le salaire" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label>Fonction <span className="text-danger">*</span></Label>
                    { !this.state.valid.fonction 
                        ? this.displayError("Les caractères spéciaux (_ , + * $ ...) ou chiffres ne sont pas autorisés.")
                        : '' }
                    <Input invalid={!this.state.valid.fonction} onChange={this.handleChange} type="text" name="fonction" placeholder="Entrez la fonction"/>
                </FormGroup>
                <small className="text-danger float-right">* Champs obligatoires</small>
            </Form>
        )
    }

    renderAdd = () => {
        return (
            <div>
                <div id="confirmButton">
                    <Button disabled={!this.state.totalValid} onClick={this.toggleAsk} color="dark">Ajouter</Button>
                </div>
                <Tooltip placement="top" target="confirmButton" toggle={this.toggleTooltip} isOpen={!this.state.totalValid && this.state.tooltipOpen}>
                    <small>Veuillez remplir tous les champs.</small>
                </Tooltip>
            </div>
        )
    }

    renderAsk = () => {

       if (this.state.asked === true) {

            var person = this.state.person
            return (
                <Ask confirm={this.props.handler} item={this.state.person} toggle={this.props.toggle} toggleAsk={this.toggleAsk} toggleConfirm={this.props.toggleConfirm}
                    text={'Êtes vous sûr de vouloir ajouter ' + this.state.person.firstName + ' ' + this.state.person.surname + ' ?'} />
            )
        }
    }

    

    render() {
        return (
            <div>
               
                <Modal isOpen={this.state.isOpen} toggle={this.props.toggle}>
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
                        <Button onClick={this.props.toggle} color="danger">Annuler</Button>
                    </ModalFooter>
                </Modal>
                {this.renderAsk()}
            </div>
        )
    }

}

export default NewPerson