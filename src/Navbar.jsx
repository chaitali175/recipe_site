import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { NavLink } from 'react-router-dom';


const Navbar = ()=>{
   
    
    
    
    return(
        <>
    
        <div className="container_fluid">
            <div className="row">
              
              

          <nav className="navbar navbar-expand-lg  " style={{paddingBottom:'10px', paddingTop:'10px'}}>
        
            <NavLink className="navbar-brand" to="/">SEARCH RECIPE</NavLink>
            <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{borderStyle:'double',borderRadius:'5px' ,paddingLeft:'10px',paddingRight:'20px',backgroundColor:'palegreen'}} className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                    <NavLink  activeClassName="menu-active" className="nav-link p" to="/snacks" >Snacks</NavLink>
                   
                </li>
                <li className="nav-item">
                    <NavLink  activeClassName="menu-active" className="nav-link" to="/healthy">Healthy</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink  activeClassName="menu-active" className="nav-link" to="/dessert">Dessert</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link" to="/indiaspecial">Special In India</NavLink>
                </li>
                
                </ul>
               
            </div>
            </nav> 
         
            </div>
            

        </div>

 
    
    </>
    )

}

export default Navbar;