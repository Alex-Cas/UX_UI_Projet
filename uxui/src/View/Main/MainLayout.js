import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavLink} from 'reactstrap'
import Routes from './Routes.js'


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
                            AuliLand
                        </NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavLink tag={Link} to="/buildings">
                                Bâtiments
                            </NavLink>
                            <NavLink tag={Link} to="/attractions">
                                Attractions
                            </NavLink>
                            <NavLink tag={Link} to="/personnel">
                                Personnel
                            </NavLink>
                        </Nav>
                        <Nav navbar>
                            <NavLink tag={Link} to="/login">
                                Connexion
                            </NavLink>
                        </Nav>
                    </Navbar>
                    <Routes />
                </div>
            </BrowserRouter>
        )
    }
}

export default MainLayout