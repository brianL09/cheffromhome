import React from 'react';
import {connect} from 'react-redux';
import UtilityCenter from '../../../utilities/UtilityCenter';
import ShoppingList from './ShoppingList';
var difficulty = 1;

const About = ({recipe}) => {
    return(
            <UtilityCenter x="true">
                <div className="clip-path__about"></div>
                <div className="section__heading u-margin-bottom-large">
                    <h1 className="heading heading__primary heading__primary--large u-margin-top-medium">{recipe.basicInfo.title}</h1>
                    <h2 className="heading heading__tertiary heading__tertiary--large">{recipe.about.title}</h2>
                    <div className="section__heading--sub-container">
                        {/* <div className="difficulty hard"> */}
                        <div className={`difficulty ${difficulty <= 2 ? "easy" : difficulty > 2 && difficulty < 4 ? "medium" : "hard"}`}>
                            <h3 className={`${difficulty < 4 ? "u-font-white" : ""}`}>{difficulty <= 2 ? "Easy" : difficulty > 2 && difficulty < 4 ? "Par" : "Hard"}</h3>
                            <h4 className="difficulty__content">{recipe.basicInfo.cookTime}</h4>
                        </div>
                        <h3 className="heading__tertiary--small u-font-primary-bold-16"><span className="u-font-primary u-font-normal-1-uppercase">Submitted by:</span> {recipe.author.author} on {recipe.posted.split(' ').slice(0, 4).join(' ')}</h3>
                    </div>
                </div>
                <div className="section__about--image">
                    <img src="/images/steak.jpg" alt=""/>
                </div>
                <div className="section__about--text">
                    {recipe.about.paragraphs.map(p => <p className="u-margin-bottom-small" key={p.slice(0, 10)}>{p}</p>)}
                </div>
                <ShoppingList list={recipe.shopping}/>
            </UtilityCenter>
    )
}
const mapStateToProps = (state) => {
    return {recipe: state.recipes.recipe}
}
export default connect(mapStateToProps, null)(About);