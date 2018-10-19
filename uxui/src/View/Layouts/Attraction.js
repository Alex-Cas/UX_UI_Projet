import React, { Component } from 'react'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Attractions.js'
import maintenanceModel from '../../Model/Maintenances.js'

class Attraction extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.attractionId)
        this.state = {
            attraction: model.get(id),
            maintenances: maintenanceModel.list(id)
        }
    }

    render() {
        var attraction = this.state.attraction
        var maintenances = this.state.maintenances

        return (
            <div>
                {attraction.name}<br/>
                Maintenances (ids): 
                {maintenances.map( (item, idx) => {
                    return (<MaintenanceItem key={idx} maintenance={item}/>)
                })}
            </div>
        )
    }
}

export default Attraction