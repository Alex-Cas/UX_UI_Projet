import React, { Component } from 'react'
import {Container, Row} from 'reactstrap'
import PersonnelItem from '../Components/PersonnelItem.js'
import personnelRaw from '../../Model/personnel.json'

class PersonnelLayout extends Component
{
    constructor(props) {
        super(props)
        console.log(personnelRaw)
    }

    render() {
        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    {personnelRaw.map( (item, idx) => {
                        return (<PersonnelItem key={idx} personnel={item}/>)
                    })}
                </Row>
            </Container>
        )
    }
}

export default PersonnelLayout