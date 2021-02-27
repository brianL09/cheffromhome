import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import authReducer from './authReducer';




export default combineReducers({
    recipe: recipeReducer,
    auth: authReducer
});