import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, 
    Button, Form, FormGroup, Label, Input,
    Container, Tooltip} from 'reactstrap'
import Ask from './Ask.js'


class NewAttraction extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            attraction: {
                name: null,
                date: null,
                price: null
            },
            valid: {
                name: true,
                date: true,
                price: true
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
        var attraction = {...this.state.attraction}

        valid[event.target.name] = this.verify(event.target.type, event.target.value)
        attraction[event.target.name] = event.target.value

        this.setState({valid, attraction}, () => {this.updateTotalValid()})
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
                break
            case 'date':
                if (/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)){
                    toReturn = true
                }
                break
            default:
                break
        }
        return toReturn
    }

    updateTotalValid = () => {

        var valid = {...this.state.valid}
        var attraction = {...this.state.attraction}
        var total = true

        for (let [key, value] of Object.entries(valid)) {

            if (value === false) {

                total = false
            }
        }

        for (let [key, value] of Object.entries(attraction)) {

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
                        ? this.displayError("Les caractères spéciaux (_ , + * $ ...) ou chiffres ne sont pas autorisés.")
                        : '' }
                    <Input invalid={!this.state.valid.name} onChange={this.handleChange} type="text" name="name" placeholder="Entrez le nom" />
                </FormGroup>
                <FormGroup>
                    <Label>Date <span className="text-danger">*</span></Label>
                    { !this.state.valid.date 
                        ? this.displayError("La date ne semble pas être valide...")
                        : '' }
                    <Input invalid={!this.state.valid.date} onChange={this.handleChange} type="date" name="date" placeholder="Entrez la date"/>
                </FormGroup>
                <FormGroup>
                    <Label>Prix <span className="text-danger">*</span></Label>
                    { !this.state.valid.price 
                        ? this.displayError("Le prix ne peut pas être inférieur ou égal à 0.")
                        : '' }
                    <Input invalid={!this.state.valid.price} onChange={this.handleChange} type="number" name="price" placeholder="Entrez le prix"/>
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

            var attraction = this.state.attraction
            return (
                <Ask confirm={this.props.handler} item={attraction} toggle={this.props.toggle} toggleAsk={this.toggleAsk} toggleConfirm={this.props.toggleConfirm}
                    text={'Êtes vous sûr de vouloir ajouter l\'attraction' + attraction.name + ' au prix de ' + attraction.price + ' ?'} />
            )
        }
    }

    

    render() {
        return (
            <div>
               
                <Modal isOpen={this.state.isOpen} toggle={this.props.toggle}>
                    <ModalHeader>
                        Ajout d'Attraction
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

export default NewAttraction