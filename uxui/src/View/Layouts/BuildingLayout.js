import React, { Component } from 'react'
import BuildingItem from '../Components/BuildingItem.js'
import model from '../../Model/Buildings.js'

class BuildingLayout extends Component
{
    constructor(props) {
        super(props)

        this.init()
    }

    init() {

        this.buildings = model.list()
    }

    render() {
        return (
            <div>
                {this.buildings.map( (item, idx) => {
                    return (<BuildingItem key={idx} building={item}/>)
                })}
            </div>
        )
    }
}

export default BuildingLayout