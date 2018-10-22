import React, { Component } from 'react'
import {Container, Row, Button} from 'reactstrap'
import AttractionItem from '../Components/AttractionItem.js'
import model from '../../Model/Attractions.js'

class AttractionLayout extends Component
{
    constructor(props) {
        super(props)
        
        this.state = {
            attractions: model.list()
        }
    }

    render() {
        var attractions = this.state.attractions

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    {attractions.map( (item, idx) => {
                        return (<AttractionItem key={idx} attraction={item} />)
                    })}
                </Row>
            </Container>
        )
    }
}

export default AttractionLayout