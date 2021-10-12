import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup, Box, AppBar, Typography,Toolbar, MenuItem, CssBaseline } from "@material-ui/core/";

const Menu = () => {
    return (
        <>
         <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
            <MenuItem>
                <Typography variant="h4">Statystyki budowlane</Typography>
            </MenuItem>
            <ButtonGroup variant="outlined" aria-label="outlined button group">


                <MenuItem>
                    <Link style={{textDecoration: "none"}} to="/from" underline="none">

                        <Button variant="contained">Fromularz</Button>
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link style={{textDecoration: "none"}} to="/stats" underline="none">

                        <Button variant="contained">Statystyki</Button>
                    </Link>
                </MenuItem>

            </ButtonGroup>
            </Toolbar>
        </AppBar >
        </>
    );
};
export default Menu;
