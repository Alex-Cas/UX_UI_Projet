import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText, CardImg} from 'reactstrap'

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
        console.log(person)

        return (
            <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '175px'}}>
                <Card tag={Link} to={"/personnel/" + person.id}>
                    <CardImg style={{'height': '175px'}} width="100%" alt="Photo de profil" src={require("../../img/"+ String(person.id % 8 + 1) +".png")} />
                    <CardBody style={{'minHeight': '5rem'}}>
                        <CardText className="text-center align-middle">
                            {person.firstName} {person.surname}
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default PersonnelItem