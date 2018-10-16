import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AttractionItem extends Component
{
    constructor(props) {
        super(props)
        this.attraction = props.attraction
    }

    render() {
        return (
            <div>
                <Link to={"/attractions/" + this.attraction.id}>
                    {this.attraction.name}
                </Link>
            </div>
        )
    }
}

export default AttractionItem