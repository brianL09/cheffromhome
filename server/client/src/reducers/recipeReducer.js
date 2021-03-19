import {FETCH_RECIPES, FETCH_RECIPE} from '../actions/types';

export default function recipeReducer( state=[{}], action) {
    switch(action.type){
        case FETCH_RECIPES:
            return {snippets: action.payload};
        case FETCH_RECIPE:
            return{recipe: action.payload};
        default:
            return state;
    }

    
    return state;
}