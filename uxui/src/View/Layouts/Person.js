import React, { Component } from 'react'
import {Button} from 'reactstrap'
import model from '../../Model/Personnel.js'

class Person extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.personId)
        this.state = {
            person: model.get(id)
        }
    }

    fire = () => {

        model.delete(this.state.person.id)
    }

    render() {
        var person = this.state.person;

        return (
            <div>
                <p>
                    {person.firstName} {person.surname} <br />
                    {person.age} years old <br />
                    Working as {person.fonction} <br />
                    {person.salary}€ per month
                </p>

                <Button onClick={this.fire}>vire moi ce mec</Button>
            </div>
        )
    }
}

export default Person