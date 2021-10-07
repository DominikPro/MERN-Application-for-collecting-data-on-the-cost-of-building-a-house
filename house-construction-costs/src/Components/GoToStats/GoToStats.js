import React from 'react'
import {Link} from "react-router-dom"

 const  GoToStats =()=> {
    return (
        <div>
            <h2>Twój kosztory został pomyślnie wysłany</h2> 
            <Link to="/stats"> 
            <button>Zobacz koszty budpwy innych inwestorów</button></Link>
        </div>
    )
}

export default GoToStats
