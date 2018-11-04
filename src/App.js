import React, { Component } from 'react';
import CardList from './components/CardList';
import Modals from './components/Modals';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <CardList/>
                <Modals/>
            </div>
        );
    }
}
