import React, { Component } from 'react'
import {Container, Row, Button, Card, CardTitle, CardBody, CardHeader} from 'reactstrap'
import BuildingItem from '../Components/BuildingItem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import model from '../../Model/Buildings.js'
import Confirm from '../Components/Modals/Confirm.js'
import Modal  from '../Components/Modals/NewBuilding.js'



class BuildingLayout extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            buildings: model.list(),
            adding: false,
            confirm: false,
            newBuilding: {}
        }
    }
    toggleAdd = () => {

        this.setState({adding: !this.state.adding})
    }

    toggleConfirm = () => {

        this.setState({confirm: !this.state.confirm})
    }

    displayAdd = () => {

        if (this.state.adding) {

            return (

                <Modal handler={this.addBuilding} toggle={this.toggleAdd} toggleConfirm={this.toggleConfirm}/>
            )
        }
    }

    addBuilding = (building) => {

        var e = model.create(building)
        this.setState({buildings: model.list(), newBuilding: building})
    }

    renderConfirm = () => {

        if (this.state.confirm === true) {

            return (
                <Confirm ok={this.toggleConfirm} item={this.state.newBuilding} text={this.state.newBuilding.name + ' a bien été ajouté.'}/>
            )
        }
    }


    render() {
        var buildings = this.state.buildings

        return (
            <Container className="p-3">
                <Row className="justify-content-center">
                    <Card>
                        <CardHeader tag="h4" className="bg-secondary text-white">
                            <div className="float-left align-middle">BATIMENTS DU PARC</div>
                            <div className="float-right">
                                <Button onClick={this.toggleAdd} color="success"><FontAwesomeIcon icon="plus" />&nbsp; Ajouter un Batiment</Button>
                                {this.displayAdd()}
                                {this.renderConfirm()}
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center">
                                {buildings.map( (item, idx) => {
                                    return (<BuildingItem key={idx} building={item}/>)
                                })}
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default BuildingLayout