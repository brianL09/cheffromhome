import React from "react";
import About from './about/About';
import Recipe from './Recipe';
import Tips from './Tips';
import Discussion from './Discussion';

const RecipeSection = props => {
    const renderRecipe = (section) => {
        switch(section){
            case "about":
                return <About/>;
            case "recipe": 
                return <Recipe/>;
            case "tips":
                return <Tips/>;
            case "discussion":
                return <Discussion/>;
            default:
                return;
        }
    }
    return(
        <React.Fragment>
            {renderRecipe(props.section)}
        </React.Fragment>
    )
}

export default RecipeSection;