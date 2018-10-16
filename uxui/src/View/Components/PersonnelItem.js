import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText} from 'reactstrap'

class PersonnelItem extends Component
{
    constructor(props) {
        super(props)

        this.person = props.personnel
    }

    render() {
        return (
            <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                <Card tag={Link} to={"/personnel/" + this.person.id}>
                    <CardBody>
                        <CardText className="text-center">
                            {this.person.firstName} {this.person.surname}<br/>
                            <i>{this.person.salary}€</i>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default PersonnelItem