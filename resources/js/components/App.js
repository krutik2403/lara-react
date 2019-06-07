import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Team from './Team.js';
import Contact from './Contact';
import Header from './Header';
import Login from './Auth/Login';
import Register from './Auth/Register';

export default class App extends Component {
    constructor(props) {
        super(props);        

        let token = localStorage.getItem('jwt_token');
        if(token == null) {
            props.history.push('/login');            
        }
    }    

    render() {
        return (
            <div className="container">
                <Header />
                <div className="content mt-5 mb-5">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/team" component={Team} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </div>
            </div>
        );
    }
}