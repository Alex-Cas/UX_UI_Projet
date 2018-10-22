import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonnelItem from '../Components/PersonnelItem.js'
import personnelModel from '../../Model/Personnel.js'



class MaintenanceItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            maintenance: props.maintenance
        }
    }

    render() {
        var maintenance = this.state.maintenance

        return (
            <div>
                <div>{maintenance.date}</div>
                <PersonnelItem personnel={personnelModel.get(maintenance.person_id)}/>
            </div>
        )
    }
}

export default MaintenanceItem