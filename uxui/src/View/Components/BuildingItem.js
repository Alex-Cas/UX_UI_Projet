import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText, CardImg} from 'reactstrap'

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
            <div>
                <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                    <Card tag={Link} to={"/buildings/" + building.id}>
                        <CardImg style={{'height': '175px'}} width="100%" alt="Photo de batiment" src={require("../../img/batiment/"+ String(building.id % 10 + 1) +".png")} />
                        <CardBody>
                            <CardText className="text-center">
                                {building.name}<br/>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default BuildingItem