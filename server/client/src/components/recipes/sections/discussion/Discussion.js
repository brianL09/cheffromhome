import React from 'react';
import {connect} from 'react-redux';
import Forum from '../../../forum/Forum.js';

const Discussion = (props) => {
    return(
        <div className="recipe__content">
            <div className="recipe__discussion">
                <div className="recipe__discussion--heading col-12">
                    <h1 className="u-font-grey-2 u-center-text heading">Have a question about the recipe?</h1>
                </div>
                <Forum></Forum>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {comments: state.recipes.recipe.comments}
}

export default connect(mapStateToProps, null)(Discussion);