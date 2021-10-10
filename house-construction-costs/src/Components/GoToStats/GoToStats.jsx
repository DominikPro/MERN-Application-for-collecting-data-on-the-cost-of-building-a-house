import React from 'react'
import {Link} from "react-router-dom"
import Button  from '@mui/material/Button';

 const  GoToStats =()=> {
    return (
        <div>
            <h2>Twój kosztory został pomyślnie wysłany</h2> 
            <Link to="/stats"> <Button variant="contained">Zobacz koszty budowy innych inwestorów</Button></Link>
        </div>
    )
}

export default GoToStats
