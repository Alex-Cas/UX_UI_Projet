import {Col, Card, CardBody, CardText, CardImg, Container, Row, Button} from 'reactstrap'
import React, { Component } from 'react'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Attractions.js'
import maintenanceModel from '../../Model/Maintenances.js'
import personnelModel from "../../Model/Personnel";
import PersonnelItem from '../Components/PersonnelItem.js'


class Attraction extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.attractionId)
        this.state = {
            attraction: model.get(id),
            maintenances: maintenanceModel.list('attraction', id)
        }
    }

    render() {
        var attraction = this.state.attraction
        var maintenances = this.state.maintenances

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
                            {attraction.date}
                        </Col>
                        <Row className="text-center">
                            <Col xs={12}>
                                <Button onClick={this.toggleMaintenance}>
                                    Maintenance
                                </Button>
                            </Col>
                            <Row>
                                {maintenances.map( (item, idx) => {
                                    return (
                                        <Col>
                                            <div key={idx}>
                                                <MaintenanceItem maintenance={item}/>
                                                <PersonnelItem personnel={personnelModel.get(item.person_id)}/>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Row>
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default Attraction