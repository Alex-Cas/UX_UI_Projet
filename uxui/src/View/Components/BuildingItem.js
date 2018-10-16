import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BuildingItem extends Component
{
    constructor(props) {
        super(props)
        this.building = props.building
    }

    render() {
        return (
            <div>
                <Link to={"/buildings/" + this.building.id}>
                    {this.building.name}
                </Link>
            </div>
        )
    }
}

export default BuildingItem