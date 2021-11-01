
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const { uid } = useParams();

    const [tourInfo, setTourInfo] = useState({});
    useEffect(() => {
        const uri = `http://localhost:5000/products/${uid}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setTourInfo(data))
    }, [])

    const handleCartClick = () => {

        const uri = 'http://localhost:5000/myBooking';
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successs.');
                }
            })
    }

    return (
        <div>

            <h1>booking :{tourInfo.name}</h1>
            <button onClick={handleCartClick} className="btn btn-primary">Add Cart</button>


        </div>
    );
};

export default Booking;