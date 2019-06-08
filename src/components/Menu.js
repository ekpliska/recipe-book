import React from 'react';
import Recipe from './Recipe';
import '../stylesheets/Menu.module.css';

const Menu = ({ title, recipes }) => {
    // debugger;
    return (
        <article>
            <header>
                <h1 className="menutitle">
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