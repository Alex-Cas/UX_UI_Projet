import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText} from 'reactstrap'


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
            <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                <Card>
                    <CardBody tag={Link} to={"/buildings/" + building.id}>
                        <CardText className="text-center">
                            {building.name}<br/>
                        </CardText>
                    </CardBody>
                    {building.date}<br/>
                </Card>
            </Col>
        )
    }
}

export default BuildingItem