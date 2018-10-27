import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardText, CardImg} from 'reactstrap'



class AttractionItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            attraction: props.attraction
        }
    }

    render() {
        var attraction = this.state.attraction
        return (
            <div>
            <Col xs={6} sm={6} md={4} lg={4} className="my-2" style={{'maxWidth': '14rem'}}>
                <Card tag={Link} to={"/attractions/" + attraction.id}>
                    <CardImg style={{'height': '175px'}} width="100%" alt="Photo d'attraction" src={require("../../img/attraction/"+ String(attraction.id % 7 + 1) +".png")} />
                    <CardBody>
                        <CardText className="text-center">
                            {attraction.name}<br/>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            </div>
        )
    }
}

export default AttractionItem