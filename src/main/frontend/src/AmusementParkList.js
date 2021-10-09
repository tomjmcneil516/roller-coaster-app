import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {TextField, Box, AppBar, Toolbar, Grid, Card, CircularProgress, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    AmusementParkContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    }
})


const AmusementParkList = () => {
    const API_URL = "http://localhost:8080/api/v1/amusement-parks"
    const classes = useStyles()
    const [amusementParks, setAmusementParks] = useState([]);
    const [filter, setFilter] = useState("");


    useEffect(() => {
        fetchAmusementParks();
    }, [])

    const fetchAmusementParks = async () => {
        const data = await fetch(API_URL);
        const amusementParks = await data.json();
        console.log(amusementParks);
        setAmusementParks(amusementParks);
    }

    const handleInputChange = (e) => {
        setFilter(e.target.value);
    }

    const getAmusementParkCard = (AmusementPark) => {
        return(
            <Grid item xs={12} sm={4} key={AmusementPark}>
                <Card>
                    <CardActionArea component = {Link} to = {`/amusement-parks/${AmusementPark}`}>
                        <CardMedia
                            style={{ width: "130px", height: "130px"}}
                        />
                        <CardContent>
                            <Typography>{AmusementPark}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }




    return (
        <>
            <AppBar position="static">
            <Toolbar>
                    <div className = {classes.searchContainer}>
                        <SearchIcon className = {classes.searchIcon}/>
                        <TextField 
                            className = {classes.searchInput}
                            onChange = {handleInputChange}
                            label = "Search"
                        />
                    </div>
                </Toolbar>
            </AppBar>
            {amusementParks ? (
            <Grid container spacing={5} className={classes.AmusementParkContainer}>
                {amusementParks.map(
                    (amusementPark) =>
                    amusementPark.toLowerCase().includes(filter.toLowerCase()) 
                    && getAmusementParkCard(amusementPark)
            )}
            </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}

export default AmusementParkList
