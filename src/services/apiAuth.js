import axios from "axios";

function login(body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}`, body)
    return promise
}

function signUp(body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)
    return promise
}

function transations(auth){
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/home`, auth)
    return promise
}
const apiAuth = {login, signUp, transations}

export default apiAuth