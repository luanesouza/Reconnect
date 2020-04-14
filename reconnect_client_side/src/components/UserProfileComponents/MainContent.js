import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

class MainContent extends Component {
    render() {
        return (
            <main className="App-intro container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </main>
        );
    }
}

export default MainContent;
