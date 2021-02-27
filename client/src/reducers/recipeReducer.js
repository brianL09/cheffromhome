export default function recipeReducer( state=[{}], action) {
    
    if(action.type === "FETCH_RECIPES"){
        return [{title: 'Brownie'}];
    }
    
    return state;
}