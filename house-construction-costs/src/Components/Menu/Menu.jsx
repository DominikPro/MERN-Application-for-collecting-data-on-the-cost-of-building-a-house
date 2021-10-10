import React from 'react'
import {Link} from "react-router-dom";
import Button  from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Menu=()=> {
    return (
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">

      <Link to="/from" underline="none"> <Button variant="contained">Fromularz</Button> </Link>
      <Link to="/stats" underline="none"> <Button variant="contained">Statystyki</Button> </Link>

      </ButtonGroup>

       
    </Box>
            
    )
}
export default Menu