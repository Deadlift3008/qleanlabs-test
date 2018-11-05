import React, { Component } from 'react';
import CardList from './components/CardList';
import Modal from './components/Modal';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <CardList />
                <Modal />
            </div>
        );
    }
}
