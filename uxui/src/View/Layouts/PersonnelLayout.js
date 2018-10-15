import React, { Component } from 'react'
import attractionsRaw from '../../Model/attractions.json'

class PersonnelLayout extends Component
{
    constructor(props) {
        super(props)
        console.log(attractionsRaw)
    }

    render() {
        return (
            <div>
                {attractionsRaw.map( (item, idx) => {
                    return (<div key={idx}>{item.name}</div>)
                })}
            </div>
        )
    }
}

export default PersonnelLayout