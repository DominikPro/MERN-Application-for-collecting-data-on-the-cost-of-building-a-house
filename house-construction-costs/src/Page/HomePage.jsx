import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography, Button, Box } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  typography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      "fontWeight": 600
    },
  },
}));

const HomePage = () => {
  const classes = useStyle();
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={5}>

        <Grid container justifyContent="center" item xs={12} md={10}>
          <Box m={2} >
            <Typography className={classes.typography} align="center" variant="h4">
              Strona zbiera i przedstawia dane dotyczące kosztów budowy domów.
            </Typography>
          </Box>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" item xs={10} md={4}>
          <Avatar
            alt=""
            src="/images/costs.jpg"
            sx={{ width: 250, height: 250 }}
          ></Avatar>
          <Box sx={{ height: 200 }} >
            <Typography variant="h6" align="center">
              Jeśli budujesz lub budowałeś dom i chciałbyś się podzielić z innymi
              użytkownikami kosztami swojej budowy zapraszam do wypełnienia
              krótkiego formularza.
            </Typography>
          </Box>
          <Link to="/form" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">
              Fromularz <HowToVoteIcon color="secondary" fontSize="large" />
            </Button>
          </Link>
        </Grid>

        <Grid container justifyContent="center" item xs={10} md={4}>
          <Avatar
            alt="Remy Sharp"
            src="/images/stats.jpg"
            sx={{ width: 250, height: 250 }}
          ></Avatar>
          <Box sx={{ height: 200 }} >
            <Typography variant="h6" align="center">
              Jeśli przygotowujesz się do budowy i chcesz sprawdzić, na jakie koszty budowy musisz się przygotować. Przejdź do statystyk.
            </Typography>
          </Box>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">
              Statystyki
              <EqualizerIcon color="secondary" fontSize="large" />
            </Button>
          </Link>
        </Grid>

      </Grid>
    </Grid >
  );
};
export default HomePage;
