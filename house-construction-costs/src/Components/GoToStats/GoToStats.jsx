import React from 'react'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { Typography, Box } from '@material-ui/core/'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Grid from '@mui/material/Grid';


const GoToStats = () => {
    return (
        <>
            <Grid container justifyContent="center"   sx={{ flexGrow: 1}}>
                <Grid container justifyContent="center" xs={12} md={8}>
                    <Typography variant="h4">Twój kosztory został pomyślnie wysłany</Typography>

                </Grid>
                <Grid container justifyContent="center">
                    <BeenhereIcon fontSize="large" color="success"/>
                </Grid>
                <Grid container justifyContent="center" xs={12}>
                    <Link style={{ textDecoration: "none" }} to="/stats" > <Button variant="contained" color="success">Zobacz koszty budowy innych inwestorów</Button></Link>
                </Grid>

            </Grid>
        </>
    )
}

export default GoToStats
