import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AttractionItem extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            attraction: props.attraction
        }
    }

    render() {
        var attraction = this.state.attraction

        return (
            <div>
                <Link to={"/attractions/" + attraction.id}>
                    {attraction.name}
                </Link>
            </div>
        )
    }
}

export default AttractionItem