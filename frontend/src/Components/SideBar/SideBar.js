import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaSearch, FaFolder, FaPeopleArrows } from "react-icons/fa";
import {IoIosArrowBack} from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi"
import './SideBar.css'
import { Link } from 'react-router-dom';

const SideBar = (props) => {

   const handleSwap = async (e) => {
       e.preventDefault()
       if (document.getElementById("SideBar").className == 'sidebar_out'){
        document.getElementById("SideBar").className = 'sidebar_hidden'
        document.getElementById("hamburger").className = 'dropdown_exist'
       }
       else if (document.getElementById("SideBar").className == 'sidebar_hidden'){
        document.getElementById("SideBar").className = 'sidebar_out'
        document.getElementById("hamburger").className = 'sidebar_hidden'
       }
   }


    return ( 
    <div>
    <div>
        <button id="hamburger" className="dropdown_exist" onClick={(e) => handleSwap(e)}><GiHamburgerMenu/></button>
    </div>
    <div className='sidebar_hidden' id="SideBar">
    <button className='sidebar_text btn_flush' onClick={(e) => handleSwap(e)}><IoIosArrowBack /> Data Delivery</button><br/>
    <div className='sidebar_text_div'>
    <Link className='sidebar_text' to="/datasearch"><FaSearch /> Data Search</Link><br/><br/>
        
    </div>
    <div className='sidebar_text_div'>
    <Link className='sidebar_text' to="/manageproducts"><FaFolder /> Manage Products</Link><br/><br/>
        
    </div>
    <div className='sidebar_text_div'>
    <Link className='sidebar_text' to="/subscriptions"><FaPeopleArrows /> Subscriptions</Link><br/><br/>
    </div>
    <div className='sidebar_text_div sidebar_name'>
    <Link  className='sidebar_text' to="/"> Name Here</Link>
    </div>
    </div> 
    </div>);
}
 
export default SideBar;