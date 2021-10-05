import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Grid, Card, CircularProgress, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    RollerCoasterContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    }
})


const RollerCoasterList = ( {match}, props ) => {
    const {history} = props
    const API_URL = `http://localhost:8080/api/v1/amusement-parks/?amusement-park-name=${match.params.amusementParkName}`
    const classes = useStyles()
    const [rollerCoasterData, setRollerCoasterData] = useState([]);

    useEffect(() => {
        fetchRollerCoasters();
    }, [])

    const fetchRollerCoasters = async () => {
        const data = await fetch(API_URL);
        const response = await data.json();
        setRollerCoasterData(response);
    }


    const getRollerCoasterCard = (rollerCoasterID) => {
        return(
            <Grid item xs={12} sm={4} key={rollerCoasterID}>
                <Card>
                    <CardActionArea component = {Link} to = {`/roller-coasters/${rollerCoasterData.rollerCoasterName}/${rollerCoasterData.amusementParkName}`}>
                        <CardMedia
                            style={{ width: "130px", height: "130px"}}
                        />
                        <CardContent>
                        <Typography>{`${rollerCoasterName}`}</Typography>
                        </CardContent>
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
            <Grid container spacing={5} className={classes.RollerCoasterContainer}>
                {Object.keys(rollerCoasterData).map(
                    (rollerCoasterName) =>
                    getRollerCoasterCard(rollerCoasterName)
            )}
            </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}

export default RollerCoasterList
