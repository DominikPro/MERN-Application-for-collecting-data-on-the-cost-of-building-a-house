import React, { useState, useEffect } from "react";
import findData from "../../actions/findData"
import { voivodships } from "../CostForm/dataForm";
import Collapse from "@mui/material/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import { Container, Typography, Box, Card, CardContent } from '@material-ui/core/'


const useStyle = makeStyles((theme) => ({
    typography: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.3rem",
        },
    },
}));

const StatsGenerator = (props) => {
    const classes = useStyle();
    const dataForStats = props.dataForStats;
    const dataSelectedByCustomer = props.dataSelectedByCustomer;

    const [numberOfRaports, setNumberOfRaports] = useState();
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
        setNumberOfRaports(filtredData.length)


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
                <Container >
                    <Box>

                        <Box mt={2}>
                            <Typography className={classes.typography} variant="h5">{`Wybrano województwo ${dataSelectedByCustomer.voivodeship} statyski za rok ${dataSelectedByCustomer.year}.`}</Typography>
                        </Box>

                        <Box sx={{ m: 1 }}>
                            <Button variant="contained" size="large"
                                onClick={() => showStata()}
                            >
                                Pokarz statystki
                            </Button>
                        </Box>


                        <Collapse in={showStat}>
                            {showStat ?
                                <Box mt={4}>
                                    <Card sx={{ minWidth: 275 }} variant="outlined">
                                        <Box p={4}>

                                            <Box mt={2}>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    {`Średni koszt budowy 1m2 domu w ${dataSelectedByCustomer.year} roku wyniusł:`}

                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    {` ${averageCost}zł`}
                                                </Typography>
                                            </Box>

                                            <Box mt={2}>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    {`Średnia wielkość budowanego domu to:`}
                                                </Typography>

                                                <Typography variant="h5" >
                                                    {`${averageSize} m2`}
                                                </Typography>
                                                <Box mt={1}>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        {`Statystyki wygenerowane na podstawie ${numberOfRaports} raportów.`}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </Box>
                                    </Card>
                                </Box>
                                :
                                null}
                        </Collapse>
                        <Box mt={2}>

                            {noStat ? <Box mt={6}> <Typography variant="h4">Brak danych :(</Typography> </Box> : null}
                        </Box>
                    </Box>
                </Container>
            </>
        );
    } else return (<Box sx={{ m: 1 }}><Typography variant="h5">Wybierz rok i województwo</Typography></Box>)

};
export default StatsGenerator;
