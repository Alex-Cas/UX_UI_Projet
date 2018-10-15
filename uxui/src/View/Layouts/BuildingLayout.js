import React, { Component } from 'react'
import BuildingItem from '../Components/BuildingItem.js'
import buildingsRaw from '../../Model/buildings.json'

class BuildingLayout extends Component
{
    constructor(props) {
        super(props)
        console.log(buildingsRaw)
    }

    render() {
        return (
            <div>
                {buildingsRaw.map( (item, idx) => {
                    return (<BuildingItem key={idx} building={item}/>)
                })}
            </div>
        )
    }
}

export default BuildingLayout