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
                        <div className={"title"}>
                            AuliLand Experience
                        </div>
                        <div>
                            <CardImg style={{'height': '70vh', 'width': '170vh'}}  alt="Photo d'attraction" src={require("../../img/"+ "1" +".jpg")} />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home