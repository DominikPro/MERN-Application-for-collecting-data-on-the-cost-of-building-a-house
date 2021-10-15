import React from "react";
import { Link } from "react-router-dom";

import HowToVoteIcon from "@mui/icons-material/HowToVote";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography, Button } from "@material-ui/core";

const HomePage = () => {
  return (
    <Grid container justifyContent="center" sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={5}>
        <Grid container justifyContent="center" item xs={12} md={10}>
          <Typography align="center" variant="h4">
            Strona zbiera i przedstawia dane dotyczące kosztów budowy domów.
          </Typography>
        </Grid>

        <Grid container justifyContent="center" item xs={10} md={4}>
          <Avatar
            alt=""
            src="/images/costs.jpg"
            sx={{ width: 250, height: 250 }}
          ></Avatar>
          <Typography variant="h6">
            Jeśli budejesz lub budowałeś dom i chciałbyś się podzielić z innymi
            użytkownikami kosztami swojej budowy zapraszam do wypełnienia
            krótkiego formularzas.
          </Typography>
          <Link to="/form" style={{ textDecoration: "none" }}>
            <Button variant="contained">
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
          <Typography variant="h6">
            Jeśli przygotowujesz się do budowy i chcesz sprawdzić na jakie
            koszty budowy musisz się przygotować przedź do statystyk
          </Typography>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <Button variant="contained">
              Statystyki
              <EqualizerIcon color="secondary" fontSize="large" />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HomePage;
