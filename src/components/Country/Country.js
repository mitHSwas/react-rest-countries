import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    return (
        <div className='country'>
            <h1>{props.name}</h1>
            <p>Area: {props.area}</p>
            <img src={props.image.png} alt="" />
        </div>
    );
};

export default Country;