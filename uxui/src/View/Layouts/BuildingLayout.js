import React, { Component } from 'react'
import {Container, Row, Button} from 'reactstrap'
import BuildingItem from '../Components/BuildingItem.js'
import model from '../../Model/Buildings.js'

class BuildingLayout extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            buildings: model.list()
        }
    }

    render() {
        var buildings = this.state.buildings

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    {buildings.map( (item, idx) => {
                        return (<BuildingItem key={idx} building={item}/>)
                    })}
                </Row>
            </Container>
        )
    }
}

export default BuildingLayout