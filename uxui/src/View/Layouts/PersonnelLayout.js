import React, { Component } from 'react'
import PersonnelItem from '../Components/PersonnelItem.js'
import personnelRaw from '../../Model/personnel.json'

class PersonnelLayout extends Component
{
    constructor(props) {
        super(props)
        console.log(personnelRaw)
    }

    render() {
        return (
            <div className="container justify-content-md-center p-3">
                <div className="row">
                    {personnelRaw.map( (item, idx) => {
                        return (<PersonnelItem key={idx} personnel={item}/>)
                    })}
                </div>
            </div>
        )
    }
}

export default PersonnelLayout