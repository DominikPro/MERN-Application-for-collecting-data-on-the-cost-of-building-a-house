import React from 'react';
import { Link } from "react-router-dom"
import { Container, Typography, Box, Button } from "@material-ui/core"

const HomePage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ m: 5 }}>
                <Typography variant="h4">Strona zbiera i przedstawia dane dotyczące kosztów budowy domów.</Typography>
            </Box>
            <Box sx={{ m: 5, width: 500 }}>
                <Typography variant="h6">Jeśli budejesz lub budowałeś dom i chciałbyś się podzielić z innymi użytkownikami kosztami swojej budowy zapraszam do wypełnienia krótkiego formularzas.</Typography>
                <Link to="/form" style={{textDecoration: "none"}}><Button variant="contained">Fromularz</Button></Link>
            </Box >
            <Box sx={{ m: 5, width: 500 }}>
                <Typography variant="h6">Jeśli przygotowujesz się do budowy i chcesz sprawdzić na jakie koszty budowy musisz się przygotować przedź do statystyk</Typography>
                <Link to="/stats" style={{textDecoration: "none"}}><Button variant="contained">Statystyki</Button></Link>
            </Box>
        </Container>
    )
};
export default HomePage;

