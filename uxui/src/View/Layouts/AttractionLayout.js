import React, { Component } from 'react'
import attractionsRaw from '../../Model/attractions.json'

class AttractionLayout extends Component
{
    constructor(props) {
        super(props)
        console.log(attractionsRaw)
    }

    create() {
        attractionsRaw.push({"name": "COUCOU"})
    }

    render() {
        return (
            <div>
                {attractionsRaw.map( (item, idx) => {
                    return (<div key={idx}>{item.name}</div>)
                })}
                <button onClick={this.create}>click me</button>
            </div>
        )
    }
}

export default AttractionLayout