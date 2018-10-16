import React, { Component } from 'react'
import model from '../../Model/Buildings.js'

class Building extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.buildingId)
        this.state = {
            building: model.get(id)
        }
    }

    render() {
        var building = this.state.building

        return (
            <div>
                {building.name}
            </div>
        )
    }
}

export default Building