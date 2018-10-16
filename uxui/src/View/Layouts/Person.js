import React, { Component } from 'react'
import model from '../../Model/Personnel.js'

class Person extends Component
{
    constructor(props) {
        super(props)

        this.personId = parseInt(props.match.params.personId)
        this.init()
    }

    init() {

        this.person = model.get(this.personId)
    }

    render() {
        return (
            <div>
                {this.person.firstName} {this.person.surname} <br />
                {this.person.age}years old <br />
                Working as {this.person.fonction} <br />
                {this.person.salary}€ per month
            </div>
        )
    }
}

export default Person