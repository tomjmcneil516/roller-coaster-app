import React, {useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';

const RollerCoasterDetail = ( {match} ) => {

    const [rollerCoaster, setRollerCoaster] = useState({});

    const rollerCoasterRating = () => {
        return rollerCoaster.votes === 0 ? "No Rating" :
        Number(rollerCoaster.score/rollerCoaster.votes).toFixed(2) + " / 5"; 
    }

    useEffect(() => {
        fetchRollerCoaster()
    }, [])

    const fetchRollerCoaster = async () => {
        const fetchRollerCoaster = await fetch(
            `http://localhost:8080/api/v1/roller-coasters?roller-coaster-name=${match.params.rollerCoasterName}&amusement-park-name=${match.params.amusementParkName}`
            )
        const rollerCoaster = await fetchRollerCoaster.json();
        setRollerCoaster(rollerCoaster);
        console.log(rollerCoaster);
    }

    const rateRollerCoaster = async (score) => {
        rollerCoaster.score += score;
        rollerCoaster.votes++;
        const data = await fetch(`http://localhost:8080/api/v1/roller-coasters?roller-coaster-name=${match.params.rollerCoasterName}&amusement-park-name=${match.params.amusementParkName}`, {
            method: 'PUT',
            body: JSON.stringify(rollerCoaster),
            headers: {
                'content-type' : 'application/json'
            }
        })
        console.log(data);
    }

    return (
        <div>
            <h1>{rollerCoaster.rollerCoasterName}</h1>
            <h2>{rollerCoaster.amusementParkName}</h2>
            <h3>{rollerCoasterRating()}</h3>
            <h3>{rollerCoaster.votes + " total votes"}</h3>

            <Rating
                onChange = {(event, score) => {
                            rateRollerCoaster(score);
                        }}
            />

        </div>
        

    )
}

export default RollerCoasterDetail
