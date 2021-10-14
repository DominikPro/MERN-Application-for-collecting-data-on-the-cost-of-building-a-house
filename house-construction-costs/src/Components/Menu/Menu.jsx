import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup, Box, AppBar, Typography, Toolbar, MenuItem, CssBaseline } from "@material-ui/core/";

const Menu = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <MenuItem>
                        <Link to="/" style={{ textDecoration: "none" }}  >
                            <Typography color="secondary" variant="h4">Statystyki budowlane</Typography>
                        </Link>
                    </MenuItem>
                    <ButtonGroup variant="primary" aria-label="outlined button group">

                        <MenuItem>
                            <Link to="/form" style={{ textDecoration: "none" }} >

                                <Button variant="contained">Fromularz</Button>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link to="/stats" style={{ textDecoration: "none" }}  >

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
