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
        <section className="flex flex__wrap section__recipe">
                <div className="section__recipe--header col-12 ">
                    <h1>{recipe.basicInfo.title}</h1>
                    <div>
                      <SvgIcon icon="#icon-stopwatch"/>
                      <h2>{recipe.basicInfo.cookTime}</h2>
                    </div>
                </div>
            <div className="flex flex__justify--center col-12">
                <div className="section__recipe--content col-10 flex flex__wrap">
                    <h1 className="directions__heading u-center-text u-margin-bottom-large">Recipe</h1>
                <div className="section__recipe--outcome u-center-text col-12 u-padding-small">
                    <span className="u-margin-bottom-small">Outcome</span>
                    <p className="u-left-text">
                        Yields {recipeYield} "portion size" portions of {recipe.basicInfo.title}. This recipe will take approximately {recipe.basicInfo.cookTime}
                    </p>
                </div>
                <div className="col-12 flex flex__wrap flex__justify--space-around u-margin-bottom-large">
                    <RecipeIngredients recipeYield={recipeYield} setYield={setYield} ingredients={recipe.recipe.ingredients} originalYield={recipe.recipe.yield}/>
                    <RecipeDirections directions={recipe.recipe.directions}/>
                </div>
                <div className="col-12 flex flex__justify--center">
                    <RecipeTips tips={recipe.recipe.tips}/>
                </div>
                </div>
            </div>

        </section>
    )
}

const mapStateToProps = state => {
    return {recipe: state.recipes.recipe}
}
export default connect(mapStateToProps, null)(Recipe);