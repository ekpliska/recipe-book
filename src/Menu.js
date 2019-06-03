import React from 'react';
import Recipe from './Recipe';

const Menu = ({ title, recipes }) => {
    // debugger;
    return (
        <article>
            <header>
                <h1>
                    {title}
                </h1>
            </header>
            <div>
                {recipes.map((recipe, index) =>
                    <Recipe key={index}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                        steps={recipe.steps}
                    />
                )}
            </div>
        </article>
    )
}

export default Menu;