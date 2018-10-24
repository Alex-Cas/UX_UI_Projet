import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'


class Ask extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            item: props.item,
            text: props.text
        }
    }

    cancel = () => {

        this.props.toggleAsk()
    }

    confirm = () => {

        this.props.confirm(this.state.item)
        this.props.toggleConfirm()
        this.props.toggle()
        
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalBody>
                        {this.state.text}
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