import React, { useState, useEffect } from "react";
import getData from "../../actions/getData";
import StatsGenerator from "../GenerateStats/StatsGenerator";
import VoivodeshipInput from "../Shared/VoivodeshipInput";
import YearInput from "../Shared/YearInput";
import { useDispatch, useSelector } from "react-redux";
import { getCosts } from "../../redux/actions/costs"
import { Container, Typography, Box } from '@material-ui/core/'

const StatisticForm = () => {
    const dispatch = useDispatch();
    let dataForStats = useSelector(state => state.costs)
    const [statForm, setStatForm] = useState({
        id: "",
        year: "",
        voivodeship: "",
    });

    useEffect(() => {
        dispatch(getCosts())

    }, [])

    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h5">{`Wybierz rok budowy: ${statForm.year}`}</Typography>
                <YearInput setStateInParentComponent={setStatForm} />
                <Typography variant="h5">{`Wybierz wojewódtwo: ${statForm.voivodeship}`}</Typography>
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
