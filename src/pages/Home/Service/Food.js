import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    console.log(props)
    const { _id, name, lecture, language, requirement, paid, project, img } = props.foodi;

    const booking=props.foodi;
    // console.log(booking);
    // const [ab,setAb]=useState[{}];
    // useEffect(() => {
    //     const uri = `http://localhost:5000/products/${id}`;
    //     fetch(uri)
    //         .then(res => res.json())
    //         .then(data => setAb(data))
    // }, [])

    // const handleEnroll=()=>{
    //     console.log(ab);
    //   }
    return (
        <div>
            <div className="fooder">
                <img src={img} alt="" />
                <h2>Name:{name}</h2>
                <h3>Fees:{lecture}</h3>
                <h3>specialist:{language}</h3>
                <h3>Schedule:{requirement}</h3>
                <h3>Number:{paid}</h3>
                <Link to={`/booking/${_id}`}>
                <button  className="btn-regular"> Enroll</button>
                </Link>

               

            </div>
        </div>
    );
};

export default Food;