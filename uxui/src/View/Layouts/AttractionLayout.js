import React, { Component } from 'react'
import model from '../../Model/Attractions.js'
import {Container, Row, Button, Card, CardTitle, CardBody, CardHeader} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AttractionItem from '../Components/AttractionItem.js'
import Modal  from '../Components/Modals/NewAttraction.js'
import Confirm from '../Components/Modals/Confirm.js'



class AttractionLayout extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            attractions: model.list(),
            adding: false,
            confirm: false,
            newAttraction: {}
        }
    }

    toggleAdd = () => {

        this.setState({adding: !this.state.adding})
    }

    toggleConfirm = () => {

        this.setState({confirm: !this.state.confirm})
    }

    addAttraction = (attraction) => {

        var e = model.create(attraction)
        this.setState({attraction: model.list(), newAttraction: attraction})
    }

    displayAdd = () => {

        if (this.state.adding) {

            return (

                <Modal handler={this.addAttraction} toggle={this.toggleAdd} toggleConfirm={this.toggleConfirm}/>
            )
        }
    }

    renderConfirm = () => {

        if (this.state.confirm === true) {

            return (
                <Confirm ok={this.toggleConfirm} item={this.state.newAttraction} text={this.state.newAttraction.name + ' au prix de ' + this.state.newAttraction.price + ' a bien été ajouté.'}/>
            )
        }
    }

    render() {
        var attractions = this.state.attractions

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    <Card>
                        <CardHeader tag="h4" className="bg-secondary text-white">
                            <div className="float-left align-middle">ATTRACTIONS DU PARC</div>
                            <div className="float-right">
                                <Button onClick={this.toggleAdd} color="success"><FontAwesomeIcon icon="plus" />&nbsp; Ajouter d'une attraction</Button>
                                {this.displayAdd()}
                                {this.renderConfirm()}
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center">
                                {attractions.map( (item, idx) => {
                                    return (<AttractionItem key={idx} attraction={item} />)
                                })}
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default AttractionLayout