import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'


class Ask extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            person: props.item
        }
    }

    cancel = () => {

        this.props.toggleAsk()
    }

    confirm = () => {

        this.props.confirm(this.state.person)
        this.props.toggle()
        this.props.toggleConfirm()

    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalBody>
                        Êtes vous sûr de vouloir ajouter {this.state.person.firstName} {this.state.person.surname} ?
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.confirm} color="dark">Confirmer</Button>
                        <Button onClick={this.cancel} color="danger">Annuler</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default Ask