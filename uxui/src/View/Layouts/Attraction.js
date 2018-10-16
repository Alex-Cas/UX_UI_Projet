import React, { Component } from 'react'
import model from '../../Model/Attractions.js'

class Attraction extends Component
{
    constructor(props) {
        super(props)

        this.attractionId = parseInt(props.match.params.attractionId)
        this.init()
    }

    init() {

        this.attraction = model.get(this.attractionId)
    }

    render() {
        return (
            <div>
                {this.attraction.name}
            </div>
        )
    }
}

export default Attraction