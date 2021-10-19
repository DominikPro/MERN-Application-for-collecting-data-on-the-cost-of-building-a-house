import axios from "axios"

const url = "http://localhost:5000/costData"

export const fetchCosts = ()=> axios.get(url);
export const createCost = (cost) => axios.post(url, cost);