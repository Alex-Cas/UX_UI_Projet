import React, { Component } from 'react'
import model from '../../Model/Buildings.js'
import {Container, Row, Col, CardImg, Card, CardTitle, CardBody, CardHeader} from 'reactstrap'

class Building extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.buildingId)
        this.state = {
            building: model.get(id)
        }
    }

    render() {
        var building = this.state.building

        return (
            <Container className="pt-5">
                <Card body style={{'maxWidth': '75%'}} className="m-auto">
                    <Row>
                        <Col>
                            <div style={{fontSize: '60px'}}>{building.name}</div>
                        </Col>
                        <Col>
                            {building.date}
                        </Col>
                        <Col>
                            <CardImg style={{width: '50vh', height: '50vh'}} alt="Photo de profil" src={require("../../img/batiment/"+ String(building.id % 10 + 1) +".png")} />
                        </Col>
                    </Row>
                </Card>
            </Container>

        )
    }
}

export default Building