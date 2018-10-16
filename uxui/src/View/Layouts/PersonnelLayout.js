import React, { Component } from 'react'
import {Container, Row, Button} from 'reactstrap'
import PersonnelItem from '../Components/PersonnelItem.js'
import model from '../../Model/Personnel.js'

class PersonnelLayout extends Component
{
    constructor(props) {
        super(props)

        this.init()
    }

    init() {

        this.personnel = model.list()
    }

    addPerson() {
        var obj = {
            'firstName': 'Alexandre',
            'surname': 'Casara',
            'age': 22,
            'fonction': 'Big Boss',
            'salary': 9000
        }
        var e = model.create(obj)
        console.log(e)
    }

    render() {
        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    {this.personnel.map( (item, idx) => {
                        return (<PersonnelItem key={idx} personnel={item}/>)
                    })}
                </Row>
                <Button onClick={this.addPerson} >AJOUTER Personne</Button>
            </Container>
        )
    }
}

export default PersonnelLayout