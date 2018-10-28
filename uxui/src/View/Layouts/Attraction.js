import {Col, Card, CardBody, CardText, CardImg, Container, Row, Button, Collapse} from 'reactstrap'
import React, { Component } from 'react'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Attractions.js'
import maintenanceModel from '../../Model/Maintenances.js'
import AttractionItem from '../Components/AttractionItem.js'

import personnelModel from "../../Model/Personnel";
import PersonnelItem from '../Components/PersonnelItem.js'


class Attraction extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.attractionId)
        this.state = {
            attraction: model.get(id),
            maintenances: maintenanceModel.list('attraction', id),
            seeMaintenance : false
        }
    }
    toggleMaintenance = () => {

        this.setState({seeMaintenance: !this.state.seeMaintenance})
    }

    renderProfileMaintenance = () => {
        var maintenances = this.state.maintenances
        return (
            <Row>
                {maintenances.map((item, idx) => {
                    return (
                        <Col xs={12} md={6} lg={4} key={idx} className="my-3">
                            <Card className="p-3">
                                <MaintenanceItem maintenance={item}/>
                                <div className="justify-content-center">
                                    <PersonnelItem personnel={personnelModel.get(item.person_id)}/>
                                </div>
                            </Card>
                        </Col>
                    )
                 })}
            </Row>
        )
    }



    render() {
        var attraction = this.state.attraction
        attraction.date = new Date(attraction.date.split("T")[0]).toISOString().split("T")[0]

        return (
            <Container className="pt-5">
                <Card body style={{'maxWidth': '75%'}} className="m-auto">
                    <Row>
                        <Col>
                            <div style={{fontSize: '60px'}}>{attraction.name}</div>
                        </Col>
                        <Col>
                            <CardImg style={{height: '50vh', width: "50vh"}} alt="Photo d'attraction" src={require("../../img/attraction/"+ String(attraction.id % 7 + 1) +".png")} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Date de jsais pas quoi: {attraction.date}
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col xs={12}>
                            <Button onClick={this.toggleMaintenance}>
                                Maintenance
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Collapse isOpen={this.state.seeMaintenance}>
                            {this.renderProfileMaintenance()}
                        </Collapse>
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default Attraction