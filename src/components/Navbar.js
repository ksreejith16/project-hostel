import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo1 from './logo1.png';

function Navbar() {
  
  return (
    <div className='navbar'>
      <img src={logo1} alt='Logo' className='logo' />
      <ul className="navBar">
            <li className="navItem">
              <NavLink to='/' activeClassName='activeLink' exact>Home</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/login' activeClassName='activeLink' exact>Login</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/eventcalender' activeClassName='activeLink'>Event Calender</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/langexg' activeClassName='activeLink'>Lang Exhange</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/localinfo' activeClassName='activeLink'>Local Info</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/lostfound' activeClassName='activeLink'>Lost Found</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/repair' activeClassName='activeLink'>Repair</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/resouceshare' activeClassName='activeLink'>Resource Share</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/livechat' activeClassName='activeLink'>Live Chat</NavLink>
            </li>
            <li className="navItem">
              <NavLink to='/feedback' activeClassName='activeLink'>Feedback</NavLink>
            </li>
      </ul>
    </div>
  );
}

export default Navbar;
