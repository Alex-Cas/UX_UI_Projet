import React, { Component } from 'react'
import {Container} from 'reactstrap'
import {Col, Card, CardBody, CardText, CardImg, Row} from 'reactstrap'

class Home extends Component
{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            AuliLand Experience
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home