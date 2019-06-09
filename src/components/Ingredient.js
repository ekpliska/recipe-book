import React from 'react';

const Ingredient = ({ name, amount, measurement }) => {
    return (
        <li>
            <span className="amount">{amount}</span>&nbsp;
            <span className="measurement">{measurement}</span>&nbsp;
            <span className="name">{name}</span>
        </li>
    )
}

export default Ingredient;