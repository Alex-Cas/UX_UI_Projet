import React, { Component } from 'react'
import model from '../../Model/Buildings.js'

class Building extends Component
{
    constructor(props) {
        super(props)

        this.buildingId = parseInt(props.match.params.buildingId)
        this.init()
    }

    init() {

        this.building = model.get(this.buildingId)
    }

    render() {
        return (
            <div>
                {this.building.name}
            </div>
        )
    }
}

export default Building