import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let token = localStorage.getItem('jwt_token');     
        if(token != null) {
            this.props.history.push('/');            
        }
    }

    handleSubmit(e) {
        let formData = new FormData(e.target);

        const user = {
            email : formData.get('email'),
            password : formData.get('password')
        };

        axios.post('/api/login', user)
            .then(response => {
                if( response.data.status == 1 ) {
                    if (response.data.token) {
                        localStorage.setItem('jwt_token', JSON.stringify(response.data.token));
                    }
                    this.props.history.push('/about');
                } else {
                    alert(response.data.message);
                }
                
            })
            .catch(function (error) {
                console.log('Error : ' + error);
            })

        e.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form action="" method="post" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="eg. kkrutikk@gmail.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="******"/>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary btn-block" type="submit">Submit</button>
                                    <Link to="/register">Already have an account?</Link>
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
