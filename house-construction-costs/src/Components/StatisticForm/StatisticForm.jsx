import React, { useState, useEffect } from "react";
import getData from "../../actions/getData";
import StatsGenerator from "../GenerateStats/StatsGenerator";
import VoivodeshipInput from "../Shared/VoivodeshipInput";
import YearInput from "../Shared/YearInput";
import { useDispatch, useSelector } from "react-redux";
import {getCosts} from "../../redux/actions/costs"

const StatisticForm = () => {
    const dispatch = useDispatch(); 
    let dataForStats = useSelector(state=> state.costs)
    const [statForm, setStatForm] = useState({
            id: "",
            year: "",
            voivodeship: "",
    });

    useEffect(()=>{
        dispatch(getCosts())
        
    }, [])

    return (
        <div>
            <h3>{`Wybierz rok budowy: ${statForm.year}`}</h3>
            <YearInput setStateInParentComponent={setStatForm} />
            <h3>{`Wybierz wojewódtwo: ${statForm.voivodeship}`}</h3>
            <VoivodeshipInput setStateInParentComponent={setStatForm} />

            <StatsGenerator
                dataForStats={dataForStats}
                dataSelectedByCustomer={statForm}
            ></StatsGenerator>
        </div>
    );
};
export default StatisticForm;
