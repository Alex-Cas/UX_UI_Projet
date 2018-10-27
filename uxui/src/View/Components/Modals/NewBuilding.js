import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, 
    Button, Form, FormGroup, Label, Input, InputGroup,
    InputGroupAddon, InputGroupText,
    Container, Row, Tooltip} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ask from './Ask.js'


class NewBuilding extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            building: {
                name: null,
                date: null
            },
            valid: {
                name: true,
                date: true,
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
        var building = {...this.state.building}

        valid[event.target.name] = this.verify(event.target.type, event.target.value)
        building[event.target.name] = event.target.value

        this.setState({valid, building}, () => {this.updateTotalValid()})
    }

    verify = (type, value) => {

        var toReturn = false
        console.log(type)
        console.log(value)
        switch(type) {

            case 'text':
                if (/^[a-zA-z0-9-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s]+$/.test(value)) {
                    toReturn = true
                }
                break


            case 'date':
                if (/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)){
                    toReturn = true
                }
        }
        return toReturn
    }

    updateTotalValid = () => {

        var valid = {...this.state.valid}
        var building = {...this.state.building}
        var total = true
        console.log("valid")
        console.log(Object.entries(valid))
        console.log("building")
        console.log(Object.entries(building))

        for (let [key, value] of Object.entries(valid)) {

            if (value === false) {

                total = false
            }
        }

        for (let [key, value] of Object.entries(building)) {

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
                    <Label>Nom <span className="text-danger">*</span></Label>
                    { !this.state.valid.name 
                        ? this.displayError("Les caractères spéciaux (_ , + * $ ...) ne sont pas autorisés.")
                        : '' }
                    <Input invalid={!this.state.valid.name} onChange={this.handleChange} type="text" name="name" placeholder="Entrez le nom" />
                </FormGroup>
                <FormGroup>
                    <Label>Date <span className="text-danger">*</span></Label>
                    { !this.state.valid.date 
                        ? this.displayError("La date ne semble pas être valide...")
                        : '' }
                    <Input invalid={!this.state.valid.date} onChange={this.handleChange} type="date" name="date" placeholder="Choisir une date"/>
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

            var building = this.state.building
            return (
                <Ask confirm={this.props.handler} item={this.state.building} toggle={this.props.toggle} toggleAsk={this.toggleAsk} toggleConfirm={this.props.toggleConfirm}
                    text={'Êtes vous sûr de vouloir ajouter ' + this.state.building.name + ' ?'} />
            )
        }
    }

    

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.props.toggle}>
                    <ModalHeader>
                        Ajout de Batiment
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

export default NewBuilding