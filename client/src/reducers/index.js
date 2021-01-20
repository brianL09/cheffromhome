import { combineReducers } from 'redux';

const recipeReducer = ( recipe=[{title: "Brownie"}], action) => {
    if(action.type === "FETCH_RECIPES"){
        return [{title: 'Brownie'}];
    }
    return ['test'];
}

export default combineReducers({
    recipe: recipeReducer
});