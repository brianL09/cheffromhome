import React from 'react';
import RecipeCard2 from './RecipeCard2';
import {connect} from 'react-redux';
import * as actions from '../../actions';
class RecipeSearch extends React.Component {
    componentDidMount(){
        this.props.fetchRecipes();
    }
    
    render(){
        // console.log(this.props.recipes);
        return(
            <React.Fragment>
            {this.props.recipes ?
                <div className="search__results">
                    
                        <RecipeCard2 recipe={this.props.recipes[0]}></RecipeCard2>
                    
                </div> :
                <div>Loading...</div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {  
    return {recipes: state.recipes.snippets};
}

export default connect(mapStateToProps, actions)(RecipeSearch);