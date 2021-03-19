import { NavLink } from 'react-router-dom';

const RecipeCard2 = ({recipe}) => {
    console.log(recipe);
    return(
        <div className="card card__recipe">
            <div className="card__recipe--image">
                <img src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" alt=""/>
            </div>
            <div className="card__recipe--content">
                <div className="card__recipe--heading u-margin-bottom-large">
                    <h1 className="heading__secondary">{recipe.title}</h1>
                    <h4>By: {recipe.author}</h4>
                    <h4>{recipe.difficulty}</h4>
                    <h4>{recipe.cookTime}</h4>
                </div>
    
                    {recipe.description.length > 285 ?
                        <p>{recipe.description.slice(0, 280)}...</p> :
                        <p>{recipe.description}</p>
                    }
            </div>
            <NavLink className="card__link--full" to={`/recipe/${recipe.id}`}/>
        </div>
            
    )
}

export default RecipeCard2;