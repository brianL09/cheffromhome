import React from 'react';
const RecipeIngredients = ({ingredients, yieldRatio}) => {
    console.log(ingredients);
    return(
        <ul className="col-6 section__recipe--ingredients">
            {ingredients.map((ingredient) => {
                return <li key={ingredient._id}>
                            <span>{ingredient.name} - </span>
                            <span>{ingredient.quantity * yieldRatio} </span>
                            <span>{ingredient.unit}</span>
                        </li>
            })}
        </ul>
    )
}

export default RecipeIngredients