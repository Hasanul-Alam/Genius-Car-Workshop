import React, { useEffect, useState } from 'react';

import mechanic1 from '../../Images/mechanic-1.jpg';
import mechanic2 from '../../Images/mechanic-2.jpg'
import mechanic3 from '../../Images/mechanic-3.jpg'
import mechanic4 from '../../Images/mechanic-4.jpg'
import mechanic5 from '../../Images/mechanic-5.jpg'
import Expert from '../Expert/Expert';

// All Data
const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: mechanic5,
        name: 'John Wick',
        expertize: '-Alrounder Expert-'
    }
]

const Experts = () => {
    return (
        <div>
            <hr />
            <h2 className='text-primary'>Our Experts</h2>
            <hr />
            <div className='row w-75 mx-auto'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;