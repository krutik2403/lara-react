import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src={require('../assets/banner.png')}/>
                </div>
            </div>
        );
    }
}
