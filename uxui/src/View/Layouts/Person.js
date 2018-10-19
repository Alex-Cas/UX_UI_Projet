import React, { Component } from 'react'
import {Button} from 'reactstrap'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Personnel.js'
import maintenanceModel from '../../Model/Maintenances.js'

class Person extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.personId)
        this.state = {
            person: model.get(id),
            maintenances: maintenanceModel.list('person', id),
        }
    }

    fire = () => {

        model.delete(this.state.person.id)
    }

    render() {
        var person = this.state.person
        var maintenances = this.state.maintenances

        return (
            <div>
                <p>
                    {person.firstName} {person.surname} <br />
                    {person.age} years old <br />
                    Working as {person.fonction} <br />
                    {person.salary}€ per month<br />
                </p>

                <Button onClick={this.fire}>vire moi ce mec</Button>
                <br />
                Maintenances (ids): 
                {maintenances.map( (item, idx) => {
                    return (<MaintenanceItem key={idx} maintenance={item}/>)
                })}
            </div>
        )
    }
}

export default Person