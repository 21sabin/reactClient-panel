import React, {Component} from 'react';
import AppNavbar from './layout/AppNavbar';
import './App.css';
import Dashboard from './layout/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddClient from './clients/AddClient';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <AppNavbar/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/client/add" component={AddClient}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
