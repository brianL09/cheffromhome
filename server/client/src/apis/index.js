import axios from 'axios';

export const api = {
    auth: axios.create({baseURL: "http://localhost:5000/authentication"}),
    recipes: axios.create({baseURL: "http://localhost:5000/recipes"})
}