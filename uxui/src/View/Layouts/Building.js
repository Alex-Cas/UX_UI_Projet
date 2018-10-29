import React, { Component } from 'react'
import model from '../../Model/Buildings.js'
import {Container, Row, Col, CardImg, Card} from 'reactstrap'

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
        building.date = new Date(building.date.split("T")[0]).toISOString().split("T")[0]



        return (
            <Container className="pt-5">
                <Card body style={{'maxWidth': '75%'}} className="m-auto">
                    <Row>
                        <Col xs={12} md={6} className="text-left">
                            <div style={{fontSize: '60px'}}>{building.name}</div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={{fontSize: '20px'}} >Date d'installation: {building.date}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="text-left">
                            <div>
                                Historique: <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare imperdiet magna pulvinar efficitur. Nulla cursus nisi vel lorem convallis, vitae bibendum orci porttitor. Pellentesque eget ex semper, posuere tellus at, sodales mi. Nullam efficitur mattis augue ut iaculis. Donec consequat metus id facilisis dictum. Aenean fermentum hendrerit neque sit amet varius.
                            </div>
                        </Col>

                        <Col xs={12} md={6} className="text-right">
                            <CardImg style={{width: '45vh', height: '45vh'}} alt="Photo de profil" src={require("../../img/batiment/"+ String(building.id % 10 + 1) +".png")} />
                        </Col>
                    </Row>
                </Card>
            </Container>

        )
    }
}

export default Building