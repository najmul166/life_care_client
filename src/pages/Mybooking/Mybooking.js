import React, { useEffect, useState } from 'react';

const Mybooking = () => {
    const [bookingInfo, setBookingInfo] = useState([]);


    useEffect(() => {
        const uri = 'http://localhost:5000/myBooking';
        fetch(uri)
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, [])
    return (
        <div>
           {
               bookingInfo.map((data) =><div className="border border-2 m-2">
                   <h5>Name:{data.name}</h5>
                   <p>Speciality :{data.language}</p>
               </div>)
           }
        </div>
    );
};

export default Mybooking;