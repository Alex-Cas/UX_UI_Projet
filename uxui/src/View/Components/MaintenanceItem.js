import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                {maintenance.id}
            </div>
        )
    }
}

export default MaintenanceItem