import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center text-primary">Please Login</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary btn-block mb-3">Login</button>
                                    <br />
                                    <NavLink className='nav-link text-primary' to='/register'>Don't have an account?</NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;