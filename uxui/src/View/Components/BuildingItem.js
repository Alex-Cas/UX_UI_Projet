import React, { Component } from 'react'

class BuildingItem extends Component
{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                {this.props.building.name}
            </div>
        )
    }
}

export default BuildingItem