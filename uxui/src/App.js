import React, { Component } from 'react';
import './App.css';
import MainLayout from './View/Main/MainLayout.js';
import Footer from './View/Main/Footer.js';

class App extends Component {

    constructor(props) {
        super(props)
        this.initData()
    }

    initData() {

        this.dataPath = './database/'
        var dbs = [
            'attractions',
            'buildings',
            'personnel'
        ]

        dbs.forEach(db => {
            import(this.dataPath + db + '.json').then(item => {
                localStorage.setItem(db, JSON.stringify(item.default))
            })
        })        
    }

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
