import React, { Component } from 'react'
import {Modal, Button} from 'reactstrap'

class NewPerson extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {

        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Ajoute un mec</Button>
                <Modal isOpen={this.state.isOpen}>
                    coucouu
                    <Button onClick={this.props.handler}>Ajoute le !</Button>
                    <Button onClick={this.toggle}>Ferme moi ce modal</Button>
                </Modal>
            </div>
        )
    }

}

export default NewPerson