import React, { Component } from 'react'
import {Container, Row} from 'reactstrap'
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

    render() {
        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    {this.personnel.map( (item, idx) => {
                        return (<PersonnelItem key={idx} personnel={item}/>)
                    })}
                </Row>
            </Container>
        )
    }
}

export default PersonnelLayout