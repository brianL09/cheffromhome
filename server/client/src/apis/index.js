import axios from 'axios';

export const api = {
    auth: axios.create({baseURL: "/authentication"}),
    recipes: axios.create({baseURL: "/recipes"})
}