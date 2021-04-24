import { useState } from 'react';
import RecipeYield from "./RecipeYield";
import SvgIcon from '../../../icons/SvgIcon';

const RecipeIngredients = ({ingredients, originalYield, recipeYield, setYield}) => {
    // const [recipeYield,setYield] = useState(parseInt(originalYield));
    return(
        <div className="col-3 section__recipe--content-item u-min-width-phone">
            <RecipeYield total={recipeYield} setYield={setYield}/>
            <ul className="col-3 section__recipe--list">
                {ingredients.map((ingredient) => {
                    return <li className="flex__inline" key={ingredient._id}>
                                <span className="col-1 flex__inline  section__recipe--item"><SvgIcon icon={`#icon-${ingredient.type}`}/></span>
                                <span className="col-6 flex__inline section__recipe--item section__recipe--item-name">{ingredient.name}</span>
                                <span className="col-4 flex__inline section__recipe--item u-font-size-16">{ingredient.quantity * (recipeYield / originalYield)} {ingredient.unit}</span>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default RecipeIngredients