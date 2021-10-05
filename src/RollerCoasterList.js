import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const RollerCoasterList = () => {

    const [rollerCoasters, setRollerCoasters] = useState([]);

    useEffect(() => {
        fetchRollerCoasters();
    }, [])

    const fetchRollerCoasters = async () => {
        const data = await fetch("http://localhost:8080/api/v1/roller-coasters");
        const rollerCoasters = await data.json();
        console.log(rollerCoasters);
        setRollerCoasters(rollerCoasters);
    }

    return (
        <div>
            {rollerCoasters.map(rollerCoaster => (
            <h1 key={rollerCoaster.amusementParkName + rollerCoaster.rollerCoasterName}>
                <Link to={`/roller-coasters/${rollerCoaster.rollerCoasterName}/${rollerCoaster.amusementParkName}`}>
                    {rollerCoaster.rollerCoasterName + ' - ' + rollerCoaster.amusementParkName}
                </Link>
            </h1>))}
        </div>
    )
}

export default RollerCoasterList
