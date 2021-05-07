import {FETCH_RECIPES, FETCH_RECIPE, FETCH_USER, SIGN_IN, SIGN_OUT, SIGN_IN_FAILURE, REGISTER_USER, SUBMIT_RECIPE,SUBMIT_QUESTION, SUBMIT_FAILURE, UPDATE_USER} from './types';
import {api} from '../apis/index.js';
import {Cookie} from '../utils/cookie';
import {validation} from  '../utils/validation';


export const fetchRecipes = () => async (dispatch) => {
    const response = await api.recipes.post("/get");
    dispatch({type:FETCH_RECIPES, payload: response.data});
}

export const fetchRecipe = (id) => async (dispatch) => {
    const response = await api.recipes.post(`/get/${id}`);
    dispatch({type:FETCH_RECIPE, payload: response.data});
}

export const register = (email, password, username) => async(dispatch) => {
    if(!validation.email(email)){
        dispatch({type:SIGN_IN_FAILURE, payload:"You must enter a valid email."});
    } else if(!validation.password(password)){    
        dispatch({type:SIGN_IN_FAILURE, payload: "You must enter a password that contains 8 or more characters including atleast 1 capital and 1 number."});
    } else {
        const response = await api.auth.post("/register", {name: username, email: email, password: password});
        if(typeof response.data === "object"){
            Cookie.setUser(response.data, Cookie.getExpireStr(30));
            dispatch({type:REGISTER_USER, payload: response.data});
        } else{
            dispatch({type:SIGN_IN_FAILURE, payload: "This email is already in use."});
        }
    }
}

//fetch user data
export const fetchUser = (userId) => async (dispatch) => {
    const response = await api.auth.post(`/user/${userId}`);
    dispatch({type: FETCH_USER, payload: response.data})
}

export const updateUser = (user) => async (dispatch) => {
    await api.auth.get(`/user/${user._id}`)
        .then((res) => {
            dispatch({type:UPDATE_USER, payload: res.data});
        });
}

export const signIn = (email, password) => async (dispatch) => {
    const response = await api.auth.post("/login", {email: email, password: password});
    if(typeof response.data === "object"){
        Cookie.setUser(response.data, Cookie.getExpireStr(30));
        dispatch({type:SIGN_IN, payload:response.data}); 
    } else {
        dispatch({type: SIGN_IN_FAILURE, payload: response.data});
    }
}

export const signOut = () => async (dispatch) => {
    Cookie.clearAll();
    dispatch({type:SIGN_OUT, payload:{}});
}

export const submitRecipe = (recipe, user) => async (dispatch) => {
    console.log(user);
    if(user){
        let author = {author: user.username, userid: user._id}
        const response = await api.recipes.post("/new", {author, recipe});
        dispatch({type:SUBMIT_RECIPE, payload: response.payload })
    } else {
        dispatch({type: SUBMIT_FAILURE, payload: "You must be logged in to submit a recipe."})
    }

}

export const submitQuestion = (post) => async (dispatch) => {
    const response = await api.recipes.post("/new/comment", {post});
    dispatch({type: SUBMIT_QUESTION, payload: response.data});
    }

export const editQuestion = () => async (dispatch) => {

}

export const submitResponse = (post, id, user) => async (dispatch) => {
    if(!user){
        return dispatch({type: SUBMIT_FAILURE, payload:"You must be logged in to respond to a question"})
    }
    const data = {
        id,
        user,
        response: post
    }
    const response = await api.recipes.post("/new/response", {data});
    return dispatch({type: "SUBMIT_RESPONSE", payload: response.data});
}

export const editResponse = (commentId, responseId, updatedStr) => async (dispatch) => {
    // if(!user) return dispatch({type:SUBMIT_FAILURE, payload: "You must be logged in to edit your post."});
    const data = {
        commentId,
        responseId,
        response: updatedStr,
    }
    const response = await api.recipes.post("/edit/response", {data});
    
    return dispatch({type: "SUBMIT_RESPONSE", payload: response.data});
}