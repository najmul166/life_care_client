import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Food from './Food';
import  './Service.css';

const Services = () => {

    const [food,setFood] =useState([]);
    const[cart,setCart] = useState([]);

    useEffect (() => {
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setFood(data));
    },[]);

    const handleAddToCart =(foodi) => {
        const newCart = [ ...cart ,foodi];
        setCart(newCart)
    }



    return (
        <div>
            <div className="full">
            <div className="fooder-container">
            {
                food.map(foodi => <Food key ={foodi.id} foodi={foodi} handleAddToCart={handleAddToCart}></Food>)
            }
            </div>
            </div>
            
        </div>
    );
};




export default Services;