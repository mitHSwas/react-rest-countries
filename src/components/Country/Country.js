import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, flags, region } = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;