export const fetchRecipes = () => (dispatch) => {
    console.log('action fired');
    dispatch({type: "FETCH_RECIPES", payload:["test"]});
}