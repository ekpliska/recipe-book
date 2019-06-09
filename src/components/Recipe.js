import React from 'react';
import IngredientList from './IngredientList';
import Instructions from './Instructions';
import Summary from './Summary';

const Recipe = ({ name, ingredients, steps }) => {
    // debugger;
    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>{name}</h1>
            <Summary
                ingredients={ingredients.length}
                steps={steps.length}
                title={name}
            />
            <IngredientList list={ingredients} />
            <Instructions
                title='Cooking Instructions'
                steps={steps}
            />
        </section>
    )
}

export default Recipe;