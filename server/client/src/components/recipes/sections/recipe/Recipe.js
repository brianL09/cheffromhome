import {useState} from 'react';
import {connect} from 'react-redux';
import SvgIcon from "../../../icons/SvgIcon"
import RecipeYield from './RecipeYield';
import RecipeIngredients from './RecipeIngredients';
import RecipeTips from './RecipeTips';
import RecipeDirections from './RecipeDirections';


const Recipe = ({recipe}) => {
    const [recipeYield,setYield] = useState(parseInt(recipe.recipe.yield));
    const renderIngredients = () => {
        let ingredients = recipe.recipe.ingredients;
        let result = [];
        ingredients.map((ingredient) => {
            // console.log(ingredient);
            let item = <li className="flex" key={ingredient._id}><span>{ingredient.name}</span><span>{ingredient.unit}</span></li>
            result.push(item);
        });
        return result;
    }

    return(
        <section className="flex flex__justify--center section__recipe">
            <div className="section__recipe--content col-10 flex flex__justify--space-around">
                <div className="section__recipe--header col-12">
                    <h1>{recipe.basicInfo.title}</h1>
                    <h2><SvgIcon icon="#icon-stopwatch"/>{recipe.basicInfo.cookTime}</h2>
                </div>
                <RecipeYield total={recipeYield} setYield={setYield}/>
                <RecipeIngredients ingredients={recipe.recipe.ingredients} yieldRatio={recipeYield/recipe.recipe.yield}/>
                <RecipeTips tips={recipe.recipe.tips}/>
                <RecipeDirections directions={recipe.recipe.directions}/>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {recipe: state.recipes.recipe}
}
export default connect(mapStateToProps, null)(Recipe);