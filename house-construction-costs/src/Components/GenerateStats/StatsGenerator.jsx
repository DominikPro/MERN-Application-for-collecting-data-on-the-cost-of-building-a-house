import React, { useState, useEffect } from "react";
import findData from "../../actions/findData"
import { voivodships } from "../CostForm/dataForm";
import Button from '@mui/material/Button';
import { Container, Typography, Box } from '@material-ui/core/'
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import {getCosts} from "../../redux/actions/costs"

const StatsGenerator = (props) => {
    // const dispatch = useDispatch();
    const dataForStats = props.dataForStats;
    const dataSelectedByCustomer = props.dataSelectedByCustomer;

    const [averageCost, setAverageCost] = useState(0);
    const [averageSize, setAverageSize] = useState(0);
    const [showStat, setShowStat] = useState(false);
    const [noStat, setNoStat] = useState(false)

    useEffect(() => {
        setShowStat(false)
        setNoStat(false)
    }, [dataForStats, dataSelectedByCustomer])

    const showStata = () => {
        let filtredData = dataForStats.filter(item => { if (item.year === parseInt(dataSelectedByCustomer.year) && item.voivodeship === dataSelectedByCustomer.voivodeship) { return item } });
        let sumOfCosts = filtredData.reduce((accum, obj) => accum + Number(obj.constructionCost), 0);
        let sumOfArea = filtredData.reduce((accum, obj) => accum + Number(obj.houseArea), 0);

        if (sumOfCosts === 0 || sumOfArea === 0) {
            return setNoStat(true)
        } else {
            setAverageCost(Math.round(sumOfCosts / sumOfArea))
            setAverageSize(Math.round(sumOfArea / filtredData.length))
        }

        setShowStat(true)
    }

    if (dataSelectedByCustomer.year != "" && dataSelectedByCustomer.voivodeship != "") {
        return (
            <>
                <Box sx={{  m: 1 }}>
                    <Typography variant="h5">{`Wybrano województwo ${dataSelectedByCustomer.voivodeship} statyski za rok ${dataSelectedByCustomer.year}`}</Typography>
                </Box>

                <Box sx={{  m: 1 }}>
                <Button variant="contained"
                    onClick={() => showStata()}
                >
                    Pokarz statystki
                </Button>
                </Box>

                <Box sx={{ m: 2 }}>
                    {showStat ? <Typography variant="h4">{`Średni koszt budowy 1m2 domu w ${dataSelectedByCustomer.year} roku wyniusł ${averageCost}zł średnia wielkość budowanego domu to ${averageSize} m2`}</Typography> : null}
                </Box>
                
                <Box sx={{ p: 2 }}>

                    {noStat ? <Typography variant="h4">Brak danych</Typography> : null}
                </Box>
            </>
        );
    } else return (<Box sx={{  m: 1 }}><Typography variant="h5">Wybierz rok i województwo</Typography></Box>)

};
export default StatsGenerator;
