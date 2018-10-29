import React, { Component } from 'react';
import './App.css';
import MainLayout from './View/Main/MainLayout.js';
import Footer from './View/Main/Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMoneyCheckAlt, faUser, faBriefcase, faPen, faCheck, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMoneyCheckAlt, faUser, faBriefcase, faPen, faCheck, faTimes, faTrashAlt)

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
            'personnel',
            'maintenances'
        ]

        dbs.forEach(db => {
            if (localStorage.getItem(db) === null) {
                import(this.dataPath + db + '.json').then(item => {
                    localStorage.setItem(db, JSON.stringify(item.default))
                })
            }
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
