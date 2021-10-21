import React from 'react'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { Typography, Box } from '@material-ui/core/'
import { makeStyles } from "@material-ui/core/styles";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Grid from '@mui/material/Grid';

const useStyle = makeStyles((theme) => ({
    typography: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.8rem",
            "fontWeight": 500
        },
    },
}));


const GoToStats = () => {
    const classes = useStyle();
    return (
        <>
            <Box mt={2}>

                <Grid container justifyContent="center" sx={{ flexGrow: 1 }}>

                    <Grid container justifyContent="center" xs={12} md={8}>

                        <Typography align="center" variant="h4" className={classes.typography}>Twój kosztory został pomyślnie wysłany</Typography>

                    </Grid>
                    <Grid container justifyContent="center">
                        <Box mt={2}>
                            <BeenhereIcon fontSize="large" color="success" />
                        </Box>
                    </Grid>
                    <Grid container justifyContent="center" xs={12}>
                        <Link style={{ textDecoration: "none" }} to="/stats" > <Button variant="contained" color="success">Zobacz koszty budowy innych inwestorów</Button></Link>
                    </Grid>

                </Grid>
            </Box >
        </>
    )
}

export default GoToStats
