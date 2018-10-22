import React, { Component } from 'react'
import {Container, Row, Button, Card, CardTitle, CardBody, CardHeader} from 'reactstrap'
import PersonnelItem from '../Components/PersonnelItem.js'
import Modal  from '../Components/Modals/NewPerson.js'
import model from '../../Model/Personnel.js'

class PersonnelLayout extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            personnel: model.list()
        }
    }

    addPerson = (person) => {

        var e = model.create(person)
        this.setState({personnel: model.list()})
        console.log(e)
    }

    render() {
        var personnel = this.state.personnel

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    <Card>
                        <CardHeader tag="h4" className="bg-secondary text-white">
                            <div className="float-left align-middle">PERSONNEL DU PARC</div>
                            <div className="float-right"><Modal handler={this.addPerson}/></div>
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