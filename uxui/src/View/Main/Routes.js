import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AttractionLayout from '../Layouts/AttractionLayout.js'
import Attraction from '../Layouts/Attraction.js'
import BuildingLayout from '../Layouts/BuildingLayout.js'
import Building from '../Layouts/Building.js'
import PersonnelLayout from '../Layouts/PersonnelLayout.js'
import Person from '../Layouts/Person.js'
import Home from '../Layouts/Home.js'
import Login from '../Layouts/Login.js'

class Footer extends Component
{
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />

                <Route exact path="/buildings" component={BuildingLayout} />
                <Route exact path="/buildings/:buildingId" component={Building} />

                <Route exact path="/attractions" component={AttractionLayout} />
                <Route exact path="/attractions/:attractionId" component={Attraction} />

                <Route exact path="/personnel" component={PersonnelLayout} />
                <Route exact path="/personnel/:personId" component={Person} />

                <Route exact path="/login" component={Login} />
            </div>
        )
    }
}

export default Footer
