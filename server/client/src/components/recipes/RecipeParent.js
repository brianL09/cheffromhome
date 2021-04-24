import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import RecipeNavigation from './RecipeNavigation';
import RecipeSection from './search/RecipeSection';

const RecipeParent = ({fetchRecipe, recipe}) => {
    const sections = ["about", "recipe", "discussion"];
    const [currentSection, setSection] = useState(sections[2]);

    useEffect(() => {
        let url = window.location.pathname.split("/");
        // recipe id is the last item in array
        let id = url[url.length - 1];
        fetchRecipe(id);    
    }, [fetchRecipe]);

    return(
        <React.Fragment>
            {recipe ?
                <div className="recipe">
                    <RecipeNavigation setSection={setSection} currentSection={currentSection}/>
                    <div className="section recipe__content">
                        <RecipeSection section={currentSection} recipe={recipe}/>
                    </div>
                </div> 
            :
            <p>load me</p>
            }
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {recipe: state.recipes.recipe};
}

export default connect(mapStateToProps, actions)(RecipeParent);