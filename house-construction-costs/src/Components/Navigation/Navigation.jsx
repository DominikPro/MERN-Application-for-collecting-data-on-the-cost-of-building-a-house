import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Button,
    Grid,
    Box,
    AppBar,
    Typography,
    Toolbar,
    MenuItem,
    CssBaseline,
    Menu,
} from "@material-ui/core/";

const useStyle = makeStyles((theme) => ({
    typography: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.4rem",
        },
    },
}));

const Navigation = () => {
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <CssBaseline />
            <Grid container spacing={1}>
                <AppBar color="inherit" position="relative">
                    <Toolbar >
                        <Grid xs={9} sm={10} lg={11}>
                            <Box xs={{ mr: 1 }}>
                                <Link to="/" style={{ textDecoration: "none" }}  >
                                    <Typography className={classes.typography} variant="h4" component="div" sx={{ flexGrow: 1 }}>Statystyki budowlane</Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid xs={1} sm={2} lg={1}>

                            <Button
                                variant="contained"
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                                Menu
                            </Button>

                        </Grid>
                        <Menu
                            id="basic-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >

                            <MenuItem>
                                <Link to="/" style={{ textDecoration: "none" }} >
                                    <Button variant="contained" style={{ minWidth: '180px', minHeight: '20px' }}><HomeIcon />Strona główna</Button>
                                </Link>
                            </MenuItem>


                            <MenuItem>
                                <Link to="/form" style={{ textDecoration: "none" }} >

                                    <Button variant="contained" style={{ minWidth: '180px', minHeight: '20px' }}><HowToVoteIcon />Fromularz</Button>

                                </Link>
                            </MenuItem>

                            <MenuItem>
                                <Link to="/stats" style={{ textDecoration: "none" }}  >

                                    <Button variant="contained" style={{ minWidth: '180px', minHeight: '20px' }}><EqualizerIcon />Statystyki</Button>
                                </Link>
                            </MenuItem>
                        </Menu>


                    </Toolbar>

                </AppBar>
            </Grid>

            {/* <AppBar color="inherit" position="relative">
                <Toolbar variant="dense">
                    <MenuItem>
                        <Link to="/" style={{ textDecoration: "none" }}  >
                            <Typography className={classes.typography} color="" variant="h4">Statystyki budowlane</Typography>
                        </Link>
                    </MenuItem>
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
                </Toolbar>
            </AppBar > */}
        </>
    );
};
export default Navigation;
