import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className="col mb-3 col-md-6 col-lg-4">
            <div className="card mt-3" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt='' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-primary">Book Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;