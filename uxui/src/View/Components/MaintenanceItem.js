import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
            </div>
        )
    }
}

export default MaintenanceItem