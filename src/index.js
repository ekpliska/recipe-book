import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = [
    {
        'name': 'Baked Salmon',
        'ingredients': [
            { 'name': 'Salmon', 'amount': 1, 'measurement': '1 1b' },
            { 'name': 'Pine Nuts', 'amount': 1, 'measurement': 'cup' },
            { 'name': 'Butter Lettuce', 'amount': 2, 'measurement': 'cups' },
            { 'name': 'Yellow Squash', 'amount': 1, 'measurement': 'med' },
            { 'name': 'Olive Oil', 'amount': 0.5, 'measurement': 'cup' },
            { 'name': 'Garlic', 'amount': 3, 'measurement': 'cloves' },
        ],
        'steps': [
            'Preheat the oven to 350 degrees.',
            'Spread the olive oil around a glass baking dish.',
            'Add the salmon, garlic, and pine nuts to the dish.',
            'Bake for 15 minutes.',
            'Add the yellow squash and put back in the oven for 30 mins.',
            'Remove from oven and let cool for 15 minutes. Add the lettuce and serve.'
        ]
    },
    {
        'name': 'Fish Tacos',
        'ingredients': [
            { 'name': 'Whitefish', 'amount': 1, 'measurement': '1 1b' },
            { 'name': 'Cheese', 'amount': 1, 'measurement': 'cup' },
            { 'name': 'Iceberg Lettuce', 'amount': 2, 'measurement': 'cups' },
            { 'name': 'Tomatoes', 'amount': 2, 'measurement': 'large' },
            { 'name': 'Tortillas', 'amount': 3, 'measurement': 'med' }
        ],
        'steps': [
            'Cook the fish on the grill until hot.',
            'Place the fish on the 3 tortillas.',
            'Top them with lettuce, tomatoes, and cheese.'
        ]
    }
];

const Instructions = ({ title, steps }) => {
    return (
        <section className="instructions">
            <h2>
                {title}
            </h2>
            {steps.map((step, index) => 
                <p key={index}>{step}</p>
            )}
        </section>
    )
}

const Ingredients = ({ name, amount, measurement }) => {
    return (
        <li>
            <span className="amount">{amount}</span>
            <span className="measurement">{measurement}</span>
            <span className="name">{name}</span>
        </li>
    )
}

const Recipe = ({name, ingredients, steps}) => {
    // debugger;
    return (
        <div>
            <h3>
                {name}
            </h3>
            <ul>
                {ingredients.map((ingredient, index) => {
                    return (
                        <Ingredients
                            name={ingredient.name}
                            amount={ingredient.amount}
                            measurement={ingredient.measurement}
                        />
                    )
                })}
            </ul>
            <Instructions
                title='Cooking Instructions'
                steps={steps}
            />
        </div>
    )
}

const Menu = ({title, recipes}) => {
    return (
        <article>
            <header>
                <h1>
                    {title}
                </h1>
                <div>
                    {recipes.map((recipe, index) => 
                        <Recipe key={index}
                            name={recipe.name}
                            ingredients={recipe.ingredients}
                            steps={recipe.steps}
                        />
                    )}
                </div>
            </header>
        </article>
    )
}

ReactDOM.render(<Menu recipes={data} title='Delicious Recipes' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
