import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AttractionLayout from '../Layouts/AttractionLayout.js'
import BuildingLayout from '../Layouts/BuildingLayout.js'
import Home from '../Layouts/Home.js'

class MainLayout extends Component
{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-brand">
                            <Link to="/" className="nav-link">
                                HOME
                            </Link>
                        </div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/buildings" className="nav-link">
                                    Bâtiments
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/attractions" className="nav-link">
                                    Attractions
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/buildings" component={() => <BuildingLayout />} />
                    <Route exact path="/attractions" component={() => <AttractionLayout />} />
                </div>
            </BrowserRouter>
        )
    }
}

export default MainLayout