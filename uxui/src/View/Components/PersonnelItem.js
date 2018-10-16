import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText} from 'reactstrap'

class PersonnelItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            person: props.personnel
        }
    }

    render() {
        var person = this.state.person

        return (
            <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                <Card tag={Link} to={"/personnel/" + person.id}>
                    <CardBody>
                        <CardText className="text-center">
                            {person.firstName} {person.surname}<br/>
                            <i>{person.salary}€</i>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default PersonnelItem