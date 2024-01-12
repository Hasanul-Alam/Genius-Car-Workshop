import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="col mb-3 col-md-6 col-lg-4">
            <div className="card mt-3" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt='' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;