import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href=''>Life Care Hospital</Navbar.Brand>
          <Link >
            <NavLink to="/home" className='navver' activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}>Home</NavLink>
            <NavLink to="/booking" className='navver' activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}>Booking</NavLink>


            <NavLink to="/about" className='navver' activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}>About</NavLink>
            <NavLink to="/contact" className='navver' activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}>Contact</NavLink>

            <NavLink to="/mybooking" className='navver' activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}>Mybooking</NavLink>

            {user?.email ?
              <Button onClick={logOut} variant="light">Logout</Button> :
              <NavLink to="/login" className='navver' activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}>Login</NavLink>
            }

          </Link>
          <Navbar.Text>
            Signed in as: <a href="#login">{user?.displayName}</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;