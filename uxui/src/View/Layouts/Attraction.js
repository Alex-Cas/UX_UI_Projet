import {Col, Card, CardBody, CardText, CardImg} from 'reactstrap'
import React, { Component } from 'react'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Attractions.js'
import maintenanceModel from '../../Model/Maintenances.js'
import personnelModel from "../../Model/Personnel";
import PersonnelItem from '../Components/PersonnelItem.js'


class Attraction extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.attractionId)
        this.state = {
            attraction: model.get(id),
            maintenances: maintenanceModel.list('attraction', id)
        }
    }

    render() {
        var attraction = this.state.attraction
        var maintenances = this.state.maintenances

        return (
            <div>
                {attraction.name}<br/>
                <CardImg style={{'height': '25%', width: "25%"}} alt="Photo d'attraction" src={require("../../img/attraction/"+ String(attraction.id % 7 + 1) +".png")} />
                {attraction.date}<br/>
                Maintenances (ids): 
                {maintenances.map( (item, idx) => {
                    return (
                        <div key={idx}>
                            <MaintenanceItem maintenance={item}/>
                            <PersonnelItem personnel={personnelModel.get(item.person_id)}/>
                        </div>
                )
                })}
            </div>
        )
    }
}

export default Attraction