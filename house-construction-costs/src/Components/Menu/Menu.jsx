import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup, Box, AppBar, Typography, MenuItem } from "@material-ui/core/";

const Menu = () => {
  return (

    <AppBar position="static">

<MenuItem>
      <Typography variant="h4">Statystyki budowlane</Typography>
      </MenuItem>
      <ButtonGroup variant="outlined" aria-label="outlined button group">


        <MenuItem>
          <Link to="/from" underline="none">

            <Button variant="contained">Fromularz</Button>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/stats" underline="none">

            <Button variant="contained">Statystyki</Button>
          </Link>
        </MenuItem>

      </ButtonGroup>
    </AppBar >
  );
};
export default Menu;
