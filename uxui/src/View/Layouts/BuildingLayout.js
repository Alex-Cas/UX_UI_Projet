import React, { Component } from 'react'
import BuildingItem from '../Components/BuildingItem.js'
import model from '../../Model/Buildings.js'

class BuildingLayout extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            buildings: model.list()
        }
    }

    render() {
        var buildings = this.state.buildings

        return (
            <div>
                {buildings.map( (item, idx) => {
                    return (<BuildingItem key={idx} building={item}/>)
                })}
            </div>
        )
    }
}

export default BuildingLayout