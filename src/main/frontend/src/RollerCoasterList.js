import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Box, AppBar, Toolbar, Grid, Card, CircularProgress, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    RollerCoasterContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
    cardContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    cardMedia: {
        
    },
    cardContent: {
    }
})


const RollerCoasterList = () => {
    const API_URL = `http://localhost:8080/api/v1/roller-coasters`
    const classes = useStyles()
    const [rollerCoasterData, setRollerCoasterData] = useState([]);

    const getRollerCoasterRating = (rollerCoaster) => {
        return rollerCoaster.votes === 0 ? 0 :
        rollerCoaster.score/rollerCoaster.votes; 
    }


    useEffect(() => {
        fetchRollerCoasters();
    }, [])

    const fetchRollerCoasters = async () => {
        const data = await fetch(API_URL);
        const rollerCoasterData = await data.json();
        console.log(rollerCoasterData)
        setRollerCoasterData(rollerCoasterData);
    }


    const getRollerCoasterCard = (rollerCoaster) => {
        return(
            <Grid item xs={12} sm={12} key={rollerCoaster.rollerCoasterName}>
                <Card>
                    <CardActionArea component = {Link} to = {`/roller-coasters/${rollerCoaster.rollerCoasterName}/${rollerCoaster.amusementParkName}`}>
                        <Box className={classes.cardContainer}>
                            <CardMedia 
                                className={classes.cardMedia}
                                style={{ width: "130px", height: "130px"}}
                                image="https://static.wikia.nocookie.net/logopedia/images/0/09/Incredicoaster.jpg/revision/latest/scale-to-width-down/933?cb=20190224114016"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography>{rollerCoaster.rollerCoasterName}</Typography>
                                <Box>
                                    <Rating value = {Number(getRollerCoasterRating(rollerCoaster))} readOnly precision={0.1}/>
                                    <Box>{rollerCoaster.votes === 0 ? "No Rating" : Number(getRollerCoasterRating(rollerCoaster)).toFixed(2) + " / 5"}</Box>
                                </Box>
                                <Typography>{`${rollerCoaster.votes} votes`}</Typography>
                            </CardContent>
                        </Box>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            {rollerCoasterData ? (
            <Grid container spacing={1} className={classes.RollerCoasterContainer}>
                {rollerCoasterData.map(
                    (rollerCoaster) =>
                    getRollerCoasterCard(rollerCoaster)
            )}
            </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}

export default RollerCoasterList

