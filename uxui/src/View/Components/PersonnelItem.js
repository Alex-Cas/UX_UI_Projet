import React, { Component } from 'react'
import {Col, Card, CardBody, CardText} from 'reactstrap'

class PersonnelItem extends Component
{
    constructor(props) {
        super(props)

        this.pers = props.personnel
    }

    render() {
        return (
            <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                <Card>
                    <CardBody>
                        <CardText className="text-center">
                            {this.pers.firstName} {this.pers.surname}<br/>
                            <i>{this.pers.salary}€</i>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default PersonnelItem