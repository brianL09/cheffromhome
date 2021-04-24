import {SIGN_IN, SIGN_OUT, FETCH_USER, SIGN_IN_FAILURE, REGISTER_USER, SUBMIT_FAILURE, UPDATE_USER} from '../actions/types';

const INITIAL_STATE = {

}

export default function authReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case SIGN_IN:
            return { ...state, isSignedIn:true, user:action.payload};
        case SIGN_OUT:
            return action.payload;
        case FETCH_USER:
            return {...state, user:action.payload}
        case SIGN_IN_FAILURE:
            return {...state, message:action.payload};
        case REGISTER_USER:
            return {...state, user: action.payload};
        case SUBMIT_FAILURE:
            return {...state, message: action.payload}
        case UPDATE_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
}