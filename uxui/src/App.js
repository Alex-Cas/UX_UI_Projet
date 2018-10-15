import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './View/Main/MainLayout.js';
import Footer from './View/Main/Footer.js';

class App extends Component {
    render() {
        return (
            <div className="">
                <MainLayout />
                <Footer />
            </div>
        );
    }
}

export default App;
