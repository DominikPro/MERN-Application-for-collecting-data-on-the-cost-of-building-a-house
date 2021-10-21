import React, { useState, useEffect } from "react";
import getData from "../../actions/getData";
import StatsGenerator from "../GenerateStats/StatsGenerator";
import VoivodeshipInput from "../Shared/VoivodeshipInput";
import YearInput from "../Shared/YearInput";
import { useDispatch, useSelector } from "react-redux";
import { getCosts } from "../../redux/actions/costs";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box, Paper } from "@material-ui/core/";

const useStyle = makeStyles((theme) => ({
  typography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
}));

const StatisticForm = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  let dataForStats = useSelector((state) => state.costs);
  const [statForm, setStatForm] = useState({
    id: "",
    year: "",
    voivodeship: "",
  });

  useEffect(() => {
    dispatch(getCosts());
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <Box mt={2}>
          <Typography className={classes.typography} variant="h5">{`Wybierz rok budowy: ${statForm.year}`}</Typography>
        </Box>
        <YearInput setStateInParentComponent={setStatForm} />
        <Box mt={2}>

          <Typography className={classes.typography} variant="h5">{`Wybierz wojewódtwo: ${statForm.voivodeship}`}</Typography>
        </Box>
        <VoivodeshipInput setStateInParentComponent={setStatForm} />

        <StatsGenerator
          dataForStats={dataForStats}
          dataSelectedByCustomer={statForm}
        ></StatsGenerator>

      </Container>
    </>
  );
};
export default StatisticForm;
