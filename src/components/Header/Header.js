import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className='' >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid w-75 m-auto">
                    <NavLink className="navbar-brand" to='/'>Logo</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/login'>Login</NavLink>
                            </li>
                        </ul>
                        <ul className=" d-flex navbar-nav mb-lg-0">
                            <li className="nav-item">
                                {user?.email && <button onClick={logOut} className="btn btn-success">Log-Out</button>}
                            </li>
                        </ul>

                        {/* <form className="d-flex collapse navbar-collapse">
                            {user?.email && <button onClick={logOut} className="btn btn-success">Log-Out</button>}
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;