import React from 'react'
import {Link} from "react-router-dom"
import Button  from '@mui/material/Button';
import { Container, Typography, Box } from '@material-ui/core/'

 const  GoToStats =()=> {
    return (
        <>
        <Container maxWidth="md">
            <Box sx={{m:1}}>
            <Typography variant="h4">Twój kosztory został pomyślnie wysłany</Typography> 
            </Box>
            <Box sx={{m:1}}>
            
            <Link style={{textDecoration: "none"}} to="/stats" > <Button variant="contained">Zobacz koszty budowy innych inwestorów</Button></Link>
            </Box>
            
            </Container>
        </>
    )
}

export default GoToStats
