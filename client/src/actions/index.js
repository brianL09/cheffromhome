import {FETCH_RECIPES, SIGN_IN, SIGN_OUT, SIGN_IN_FAILURE, REGISTER_USER} from './types';
import {auth} from './../apis/authentication';

export const fetchRecipes = () => async (dispatch) => {
    dispatch({type:FETCH_RECIPES, payload:["test"]});
}

export const register = (email, password, username) => async(dispatch) => {
    const response = await auth.registerUser.post("", {name: username, email: email, password: password});
    dispatch({type:REGISTER_USER, payload: response.data});
}

export const signIn = (email, password) => async (dispatch) => {
    const response = await auth.logIn.post("", {email: email, password: password});
    if(typeof response.data === "object"){
        dispatch({type:SIGN_IN, payload:response.data});
    } else {
        dispatch({type: SIGN_IN_FAILURE, payload: response.data});
    }
}

export const signOut = () => async (dispatch) => {
    dispatch({type:SIGN_OUT, payload:{isSignedIn: false}});
}

