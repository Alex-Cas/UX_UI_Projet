import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'


class Confirm extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            person: props.item
        }
    }

    ok = () => {

        this.props.ok()
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalBody>
                        {this.state.person.firstName} {this.state.person.surname} a bien été ajouté.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.ok} color="dark">Ok</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default Confirm