import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Team Component</div>

                            <div className="card-body">I'm an Team component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
