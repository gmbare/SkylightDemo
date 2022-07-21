import React, { useState } from 'react';
import {FcOk, FcHighPriority} from 'react-icons/fc'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import {TbEdit} from 'react-icons/tb'
import {TiShoppingCart} from 'react-icons/ti'
import './Subscription_Main.css'

const Subscription_Main = (props) => {
    return ( <div>
        <div className='center'>
             <div className='title_left-align'>
            <p className='left-align inline_block'>Profiles</p><input type="text" p className='left-align inline_block' />
             </div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4} className='font-large'> Name</th>
                            <th className='font-large'>Organization</th>
                            <th className='font-large'>URL</th>
                            <th className='font-large'>Status</th>
                            <th className='font-large'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4}>557thWW_16th</td>
                            <td>AFWA</td>
                            <td>Local</td>
                            <td><FcOk/></td>
                            <td><div className='title_left-align'>
                                <TbEdit className='inline_block font-xlarge'/>
                                <TiShoppingCart className='inline_block font-xlarge'/>
                                <div className="dropdown inline_block">
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
                            <td colSpan={4}>Skylight_Digital</td>
                            <td>N/A</td>
                            <td>sftp://exampleUser@skylight.digital</td>
                            <td><FcOk/></td>
                            <td><div className='title_left-align'>
                                <TbEdit className='inline_block font-xlarge'/>
                                <TiShoppingCart className='inline_block font-xlarge'/>
                                <div className="dropdown inline_block">
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
                            <td colSpan={4}>National_Weather_Service_NWS</td>
                            <td>N/A</td>
                            <td>sftp://exampleUser@123:45:678</td>
                            <td><FcHighPriority/></td>
                            <td><div className='title_left-align'>
                                <TbEdit className='inline_block font-xlarge'/>
                                <TiShoppingCart className='inline_block font-xlarge'/>
                                <div className="dropdown inline_block">
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
        <button id="myBtn" onClick={(e) => document.getElementById("myModal").style.display = "block"}>Open Modal</button>

{/* <!-- The Modal --> */}
<div id="myModal" class="modal">

  {/* <!-- Modal content --> */}
  <div class="modal-content">
    <span class="close" onClick={(e) => document.getElementById("myModal").style.display = "none"}>&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
    </div>);
}
 
export default Subscription_Main;