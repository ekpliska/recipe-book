import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ list }) => {
    // debugger;
    return (
        <ul className="ingredients">
            {list.map((ingredient, index) => 
                <Ingredient key={index} {...ingredient} />
            )}
        </ul>
    )
}

export default IngredientList;