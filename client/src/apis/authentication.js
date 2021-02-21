import axios from 'axios';

// axios.defaults.headers.post["Content-Type"] = "application/json";

const registerUser = axios.create({
    baseURL: "http://localhost:5000/authentication/register"
});

const logIn = axios.create({
    baseURL: "http://localhost:5000/authentication/login"
})

export { registerUser, logIn };