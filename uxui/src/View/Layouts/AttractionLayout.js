import React, { Component } from 'react'
import {Button} from 'reactstrap'
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
                <Button onClick={this.create}>click me</Button>
            </div>
        )
    }
}

export default AttractionLayout