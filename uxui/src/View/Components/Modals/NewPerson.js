import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, 
    Button, Form, FormGroup, Label, Input, InputGroup,
    InputGroupAddon, InputGroupText,
    Container, Row} from 'reactstrap'

class NewPerson extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            person: {
                firstName: '',
                surname: '',
                age: 1,
                salary: 1,
                fonction: ''
            },
            valid: {
                firstName: true,
                surname: true,
                age: true,
                salary: true,
                fonction: true
            }
        }
    }

    toggle = () => {

        this.setState({isOpen: !this.state.isOpen})
    }

    handleChange = (event) => {

        var valid = {...this.state.valid}
        var person = {...this.state.person}

        valid[event.target.name] = this.verify(event.target.type, event.target.value)
        person[event.target.name] = event.target.value

        this.setState({valid, person})

        /*this.setState({
            person: {[event.target.name]: event.target.value},
            valid: {[event.target.name]: this.verify(event.target.type, event.target.value)}
        })*/
        console.log(this.state.person)
        this.forceUpdate()
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

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Ajoute un mec</Button>
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
                        <Button onClick={() => this.props.handler(this.state.person)}>Ajoute le !</Button>
                        <Button onClick={this.toggle}>Ferme moi ce modal</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default NewPerson