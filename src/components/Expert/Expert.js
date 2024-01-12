import React from 'react';

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className="col mb-3 col-md-6 col-lg-4">
            <div className="card mt-3" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt='' />
                <div className="card-body">
                    <h3 className="card-title text-primary">{name}</h3>
                    <h5 className=' text-danger'>{expertize}</h5>
                </div>
            </div>
        </div>
    );
};

export default Expert;