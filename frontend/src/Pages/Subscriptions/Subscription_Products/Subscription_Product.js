import React, { useState } from 'react';
import '../Subscription_Main/Subscription_Main.css'
import { FaSearch } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import './Subscription_Product.css'

const Subscription_Product = (props) => {
        return ( <div>
            <span className="close" onClick={(e) => document.getElementById("subModal").style.display = "none"}>&times;</span>
        <div> <button>Products</button> <button>Destinations</button>
        <div><h1>Profile Name: IP Address</h1>
            <input type="text"/><button><FaSearch/> </button>
            <div >
                <table className='stretch center'>
                    <thead>
                        <tr>
                            <th colSpan={6}>Product Definition</th>
                            <th>Destination</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td colSpan={6}>Example_Product_Definition1</td>
                        <td>Example/Destination/Directory/1</td>
                        <td><div className='title_left-align'><div className="dropdown inline_block">
                                    <button className="dropbtn"><BiDotsVerticalRounded className='inline_block font-xlarge'/></button>
                                    <div className="dropdown-content">
                                        {/* <Link to={`/${result.Product_definition}/Product_Information`}>Data Routing</Link> */}
                                        <a href="#">Edit</a>
                                        <a href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                        <td colSpan={6}>Example_Product_Definition2</td>
                        <td>Example/Destination/Directory/2</td><td><div className='title_left-align'> <div className="dropdown inline_block">
                                    <button className="dropbtn"><BiDotsVerticalRounded className='inline_block font-xlarge'/></button>
                                    <div className="dropdown-content">
                                        {/* <Link to={`/${result.Product_definition}/Product_Information`}>Data Routing</Link> */}
                                        <a href="#">Edit</a>
                                        <a href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                        <td colSpan={6}>Example_Product_Definition3</td>
                        <td>Example/Destination/Directory/3</td><td><div className='title_left-align'>  <div className="dropdown inline_block">
                                    <button className="dropbtn"><BiDotsVerticalRounded className='inline_block font-xlarge'/></button>
                                    <div className="dropdown-content">
                                        {/* <Link to={`/${result.Product_definition}/Product_Information`}>Data Routing</Link> */}
                                        <a href="#">Edit</a>
                                        <a href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='left'>Delete Selected </button>
            <button className='left'>Add</button>
        </div>
            </div>
      </div> );
}
 
export default Subscription_Product;