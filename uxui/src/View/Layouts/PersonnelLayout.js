import React, { Component } from 'react'
import {Container, Row, Button, Card, CardTitle, CardBody, CardHeader} from 'reactstrap'
import PersonnelItem from '../Components/PersonnelItem.js'
import Modal  from '../Components/Modals/NewPerson.js'
import model from '../../Model/Personnel.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Confirm from '../Components/Modals/Confirm.js'

class PersonnelLayout extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            personnel: model.list(),
            adding: false,
            confirm: false,
            newPerson: {}
        }
    }

    toggleAdd = () => {

        this.setState({adding: !this.state.adding})
    }

    toggleConfirm = () => {

        this.setState({confirm: !this.state.confirm})
    }

    addPerson = (person) => {

        var e = model.create(person)
        this.setState({personnel: model.list(), newPerson: person})
    }

    displayAdd = () => {

        if (this.state.adding) {

            return (

                <Modal handler={this.addPerson} toggle={this.toggleAdd} toggleConfirm={this.toggleConfirm}/>
            )
        }
    }

    renderConfirm = () => {

        if (this.state.confirm === true) {
            
            return (
                <Confirm ok={this.toggleConfirm} item={this.state.newPerson} text={this.state.newPerson.firstName + ' ' + this.state.newPerson.surname + ' a bien été ajouté.'}/>
            )
        }
    }

    render() {
        var personnel = this.state.personnel

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    <Card>
                        <CardHeader tag="h4" className="bg-secondary text-white">
                            <div className="float-left align-middle">PERSONNEL DU PARC</div>
                            <div className="float-right">
                                <Button onClick={this.toggleAdd} color="success"><FontAwesomeIcon icon="plus" />&nbsp; Ajouter un salarié</Button>
                                {this.displayAdd()}
                                {this.renderConfirm()}
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center">
                            {personnel.map( (item, idx) => {
                                return (<PersonnelItem key={idx} personnel={item}/>)
                            })}
                            </Row>
                        </CardBody>
                    </Card>
                </Row>            
            </Container>
        )
    }
}

export default PersonnelLayout