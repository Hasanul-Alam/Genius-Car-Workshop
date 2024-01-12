import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { googleSignIn, getEmail, getPassword, signInWithEmailPassword, error } = useFirebase();
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
                                <form action='#'>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input onChange={getEmail} type="email" className="form-control" id="email" placeholder="Enter your username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input onChange={getPassword} type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <br />
                                    <p className='text-danger'>{error}</p>
                                </form>
                                <button onClick={signInWithEmailPassword} type="submit" className="btn btn-primary btn-block mb-3">Login</button>
                                <button className="btn btn-primary mb-3 mx-2" onClick={googleSignIn}>Google Sign In</button>
                                <NavLink className='nav-link text-primary' to='/register'>Don't have an account?</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;