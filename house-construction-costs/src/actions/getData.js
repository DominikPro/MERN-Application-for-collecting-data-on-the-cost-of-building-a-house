import  axios from "axios"

const getData =(setDataForStats)=>{
     axios(
        axios.get('http://localhost:5000/costData')
        .then(res=>{
           setDataForStats(res.data)
            console.log(res.data)
        })
    )
   
} 
export default getData

