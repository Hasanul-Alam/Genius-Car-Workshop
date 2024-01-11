import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="col mb-3 col-md-6 col-lg-4">
            <div class="card mt-3" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt='' />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p class="card-text">{description}</p>
                    <button class="btn btn-primary">Book Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;