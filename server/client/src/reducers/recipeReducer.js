import {FETCH_RECIPES, FETCH_RECIPE, SUBMIT_QUESTION, SUBMIT_RESPONSE} from '../actions/types';

export default function recipeReducer( state={}, action) {
    
    // console.log(state.snippets);
    switch(action.type){
        case FETCH_RECIPES:
            // if(state.recipe === action.payload) return state;
            // if(state.snippets === action.payload) {console.log('same')}
            return {...state, snippets: action.payload};
        case FETCH_RECIPE:
            // if(state.recipe === action.payload) {console.log('same')}
            return{...state, recipe: action.payload};
        case SUBMIT_QUESTION:
            return  {...state, recipe: action.payload};
        case SUBMIT_RESPONSE: 
            return {...state, recipe: action.payload};

        default:
            return state;
    }
}