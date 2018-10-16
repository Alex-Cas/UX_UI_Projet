import React, { Component } from 'react'
import model from '../../Model/Attractions.js'

class Attraction extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.attractionId)
        this.state = {
            attraction: model.get(id)
        }
    }

    render() {
        var attraction = this.state.attraction

        return (
            <div>
                {attraction.name}
            </div>
        )
    }
}

export default Attraction