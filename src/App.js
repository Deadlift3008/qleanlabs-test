import React, { Component } from 'react';

import Header from './components/Header';
import CardList from './components/CardList';
import Modal from './components/Modal';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <CardList />
                <Modal />
            </div>
        );
    }
}
