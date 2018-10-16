import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BuildingItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            building: props.building
        }
    }

    render() {
        var building = this.state.building

        return (
            <div>
                <Link to={"/buildings/" + building.id}>
                    {building.name}
                </Link>
            </div>
        )
    }
}

export default BuildingItem