import * as api from "../../api"

export const getCosts =()=> async (dispatch) =>  {
    try {
        const {data} = await api.fetchCosts();
        dispatch({type: "FETCH_ALL", payload: data}) ; 
    } catch (error) {
        console.log(error)
    }
}

export const addCost = (cost)=> async (dispatch)=>{
    try {
        const {data} = await api.createCost(cost);
        dispatch({type: "CREATE", payload: data})
        console.log(cost)
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}