import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="eg. Krutik Patel"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="eg. kkrutikk@gmail.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="******"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                    <input type="password" id="password_confirmation" name="password_confirmation" className="form-control" placeholder="******"/>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary btn-block">Submit</button>
                                    <Link to="/login">Don't have an account?</Link>
                                </div>
                            </form>
                        </div>                        
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}
