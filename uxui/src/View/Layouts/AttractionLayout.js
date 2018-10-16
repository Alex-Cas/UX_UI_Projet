import React, { Component } from 'react'
import AttractionItem from '../Components/AttractionItem.js'
import model from '../../Model/Attractions.js'

class AttractionLayout extends Component
{
    constructor(props) {
        super(props)
        
        this.init()
    }

    init() {

        /*<Button onClick={this.create}>click me</Button>*/
        this.attractions = model.list()
    }

    render() {
        return (
            <div>
                {this.attractions.map( (item, idx) => {
                    return (<AttractionItem key={idx} attraction={item} />)
                })}
                
            </div>
        )
    }
}

export default AttractionLayout