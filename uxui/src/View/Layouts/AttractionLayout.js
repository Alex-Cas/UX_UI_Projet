import React, { Component } from 'react'
import AttractionItem from '../Components/AttractionItem.js'
import model from '../../Model/Attractions.js'

class AttractionLayout extends Component
{
    constructor(props) {
        super(props)
        
        this.state = {
            attractions: model.list()
        }
    }

    render() {
        var attractions = this.state.attractions

        return (
            <div>
                {attractions.map( (item, idx) => {
                    return (<AttractionItem key={idx} attraction={item} />)
                })}
                
            </div>
        )
    }
}

export default AttractionLayout