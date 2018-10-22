import React, { Component } from 'react'
import {Container, Row, Button, Card, CardTitle} from 'reactstrap'
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
        var obj = {
            'firstName': 'Alexandre',
            'surname': 'Casara',
            'age': 22,
            'fonction': 'Big Boss',
            'salary': 9000
        }
        var e = model.create(person)
        this.setState({personnel: model.list()})
        console.log(e)
    }

    render() {
        var personnel = this.state.personnel

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    <Card body>
                        <CardTitle>
                            PERSONNEL DU PARC
                            <div className="float-right"><Modal handler={this.addPerson}/></div>
                        </CardTitle>
                        <Row className="justify-content-center">
                        {personnel.map( (item, idx) => {
                            return (<PersonnelItem key={idx} personnel={item}/>)
                        })}
                        </Row>
                    </Card>
                </Row>            
            </Container>
        )
    }
}

export default PersonnelLayout