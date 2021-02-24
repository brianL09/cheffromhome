import {FETCH_RECIPES, FETCH_USER, SIGN_IN, SIGN_OUT, SIGN_IN_FAILURE, REGISTER_USER, SUBMIT_RECIPE} from './types';
import {api} from '../apis/index.js';
import {Cookies} from '../utils/cookies';
import {validation} from  '../utils/validation';

export const fetchRecipes = () => async (dispatch) => {
    dispatch({type:FETCH_RECIPES, payload:{}});
}

export const register = (email, password, username) => async(dispatch) => {
    if(!validation.email(email)){
        dispatch({type:SIGN_IN_FAILURE, payload:"You must enter a valid email."});
    } else if(!validation.password(password)){    
        dispatch({type:SIGN_IN_FAILURE, payload: "You must enter a password that contains 8 or more characters including atleast 1 capital and 1 number."});
    } else {
        const response = await api.auth.post("/register", {name: username, email: email, password: password});
        if(typeof response.data === "object"){
            Cookies.setUser(response.data, Cookies.getExpireStr(30));
            dispatch({type:REGISTER_USER, payload: response.data});
        } else{
            dispatch({type:SIGN_IN_FAILURE, payload: "This email is already in use."})
        }
    }
}

//fetch user data
export const fetchUser = (userId) => async (dispatch) => {
    const response = await api.auth.get(`/user/${userId}`);
    dispatch({type: FETCH_USER, payload: response.data})
}

export const signIn = (email, password) => async (dispatch) => {
    const response = await api.auth.post("/login", {email: email, password: password});
    if(typeof response.data === "object"){
        Cookies.setUser(response.data, Cookies.getExpireStr(30));
        dispatch({type:SIGN_IN, payload:response.data}); 
    } else {
        dispatch({type: SIGN_IN_FAILURE, payload: response.data});
    }
}

export const signOut = () => async (dispatch) => {
    document.cookie = "isSignedIn= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "_id= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    
    dispatch({type:SIGN_OUT, payload:{isSignedIn: false}});
}

export const submitRecipe = (recipe, user) => async (dispatch) => {
    console.log(user);
    if(user){
        let author = {author: user.username, userid: user._id}
        const response = await api.recipes.post("/new", {author, recipe});
        console.log('here', user);
        dispatch({type:SUBMIT_RECIPE, payload: response.payload })
    }
    // console.log(recipe, user);
}

