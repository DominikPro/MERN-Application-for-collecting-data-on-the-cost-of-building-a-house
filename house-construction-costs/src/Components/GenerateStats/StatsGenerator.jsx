import React, { useState, useEffect } from "react";
import findData from "../../actions/findData"
import { voivodships } from "../CostForm/dataForm";
import Button from '@mui/material/Button';
import { Container, Typography, Box, Paper, CardContent } from '@material-ui/core/'
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const StatsGenerator = (props) => {
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
                <Box sx={{ m: 1 }}>
                    <Typography variant="h5">{`Wybrano województwo ${dataSelectedByCustomer.voivodeship} statyski za rok ${dataSelectedByCustomer.year}`}</Typography>
                </Box>

                <Box sx={{ m: 1 }}>
                    <Button variant="contained"
                        onClick={() => showStata()}
                    >
                        Pokarz statystki
                    </Button>
                </Box>
                <CardContent sx={{ minWidth: 275 }}>

                    {showStat ? <>
                        <Box mt={2}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {`Średni koszt budowy 1m2 domu w ${dataSelectedByCustomer.year} roku wyniusł:`}

                            </Typography>
                            <Typography variant="h5" component="div">
                                {` ${averageCost}zł`}
                            </Typography>
                        </Box>
                    </>
                        : null}


                    {showStat ? <>
                        <Box mt={2}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {`Średnia wielkość budowanego domu to:`}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {`${averageSize} m2`}
                            </Typography>
                        </Box>
                    </>
                        : null}

                </CardContent>


                <Box mt={2}>

                    {noStat ? <Typography variant="h4">Brak danych</Typography> : null}
                </Box>
            </>
        );
    } else return (<Box sx={{ m: 1 }}><Typography variant="h5">Wybierz rok i województwo</Typography></Box>)

};
export default StatsGenerator;
