import React, { Component } from 'react'
import model from '../../Model/Buildings.js'
import {Col, Card, CardBody, CardText, CardImg, Row} from 'reactstrap'

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
            <div>
                <Col>
                    {building.name}
                </Col>
                <Col>
                    {building.date}
                </Col>
                <Col>
                    <CardImg style={{'Width': '80px%', 'minWidth': '80px'}} alt="Photo de profil" src={require("../../img/batiment/"+ String(building.id % 10 + 1) +".png")} />
                </Col>
            </div>

        )
    }
}

export default Building