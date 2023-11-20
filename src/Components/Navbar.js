import React from 'react';
import { NavLink } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi';
import logo from '../img/logo.png';
export default function Navbar() {


  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container container-custom">
    <NavLink className="navbar-brand  " to="/">
      <img src={logo} id='logo' style={{width: "50px", height: "50px"}} alt='logo'/>
    
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">PRODUCTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link cart-trolley-link" to="/cart">
          <FiShoppingCart className="cart-trolley"/>
          <span className='cart-trolley-item'>10</span>
          </NavLink>
        </li>
       
        
      </ul>
    
    </div>
  </div>
</nav>
   
   </>
  )
}




