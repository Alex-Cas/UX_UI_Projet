import React, { Component } from 'react'
import {CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom'
import personnelModel from '../../Model/Personnel.js'



class MaintenanceItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            maintenance: props.maintenance,
            date: (new Date(props.maintenance.date.split("T")[0])).toISOString().split("T")[0]
        }
    }

    render() {
        var maintenance = this.state.maintenance
        var date = this.state.date


        return (
            <div className="ml-3">
                <h5><CardTitle tag={Link} to={"/maintenances/" + maintenance.id} >Maintenance du {date}</CardTitle></h5>
                <div>Vérification des capteurs et divers tests</div>
            </div>
        )
    }
}

export default MaintenanceItem