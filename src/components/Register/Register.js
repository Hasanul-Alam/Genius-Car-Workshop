import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
  const { getEmail, getPassword, getConfirmPassword, signUpWithEmailPassword, error } = useFirebase();
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center text-primary">Please Register</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input onChange={getEmail} type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={getPassword} type="password" className="form-control" id="password" placeholder="Enter your password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={getConfirmPassword} type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                  </div>
                  <br />
                  <p className='text-danger'>{error}</p>
                </form>
                <button onClick={signUpWithEmailPassword} type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                <br />
                <NavLink to='/login' className='nav-link text-primary'>Already Registered?</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;