import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText, CardImg, Row} from 'reactstrap'


class BuildingItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            building: props.building
        }
    }

    render() {
        var building = this.state.building


        return (
            <Col xs={11} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                <Card>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <CardBody tag={Link} to={"/buildings/" + building.id}>
                                <CardText className="text-center">
                                    {building.name}<br/>
                                </CardText>
                            </CardBody>
                        </Col>
                        <Col>
                            <CardImg style={{'Width': '100%', 'minWidth': '80px'}} alt="Photo de profil" src={require("../../img/batiment/"+ String(building.id % 10 + 1) +".png")} />
                        </Col>
                        <Col xs={11} sm={11} md={11} className="text-center">
                            {building.date}
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    }
}

export default BuildingItem