import axios from 'axios';

export const auth = {
    registerUser: axios.create({baseURL: "http://localhost:5000/authentication/register"}),
   logIn: axios.create({baseURL: "http://localhost:5000/authentication/login"}),
}