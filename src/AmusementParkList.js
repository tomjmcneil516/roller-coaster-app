import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const AmusementParkList = () => {

    const [amusementParks, setAmusementParks] = useState([]);

    useEffect(() => {
        fetchAmusementParks();
    }, [])

    const fetchAmusementParks = async () => {
        const data = await fetch("http://localhost:8080/api/v1/amusement-parks");
        const amusementParks = await data.json();
        console.log(amusementParks);
        setAmusementParks(amusementParks);
    }

    return (
        <div>
            {amusementParks.map(amusementPark => (
            <h1 key={amusementPark}>
                <Link to={`/amusement-parks/${amusementPark}`}>
                    {amusementPark}
                </Link>
            </h1>))}
        </div>
    )
}

export default AmusementParkList
