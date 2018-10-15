import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import AttractionLayout from '../Layouts/AttractionLayout.js'
import BuildingLayout from '../Layouts/BuildingLayout.js'
import PersonnelLayout from '../Layouts/PersonnelLayout.js'
import Home from '../Layouts/Home.js'
import Login from '../Layouts/Login.js'

class MainLayout extends Component
{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Navbar color="dark" dark expand={true}>
                        <NavbarBrand tag={Link} to="/">
                            HOME
                        </NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavLink tag={Link} to="/buildings">
                                Bâtiments
                            </NavLink>
                            <NavLink tag={Link} to="/attractions">
                                Attractions
                            </NavLink>
                            <NavLink tag={Link} to="/Personnel">
                                Personnel
                            </NavLink>
                        </Nav>
                        <Nav navbar>
                            <NavLink tag={Link} to="/login">
                                Login
                            </NavLink>
                        </Nav>
                    </Navbar>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/buildings" component={() => <BuildingLayout />} />
                    <Route exact path="/attractions" component={() => <AttractionLayout />} />
                    <Route exact path="/personnel" component={() => <PersonnelLayout />} />

                    <Route exact path="/login" component={() => <Login />} />
                </div>
            </BrowserRouter>
        )
    }
}

export default MainLayout