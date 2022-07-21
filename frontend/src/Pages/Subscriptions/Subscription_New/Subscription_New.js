import React, { useState } from 'react';
import '../Subscription_Main/Subscription_Main.css'

const Subscription_New = (props) => {
    return ( <div><span className="close" onClick={(e) => document.getElementById("myModal").style.display = "none"}>&times;</span>
    <div> 
        <h1>File Details</h1>
        <div className='font-size-xlarge'>
            <p className='center inline_block '>Organization: <input type="text" className='inline_block' /> </p>
            <p>Name: *<input type="text"/> </p> 
            <label htmlFor="SearchBy">Type:</label>
            <select name="SearchBy" id="SearchBy">
                <option value="File_name">Local</option>
                <option value="Model_name">SFTP</option>
                <option value="Product_definition">FTP</option>
                <option value="Customers">Example</option>
            </select>
            <br/>
            {/* <p>File Source <input type="text" /> </p> */}
            <label htmlFor="SearchBy">Status report at:</label>
            <select name="SearchBy" id="SearchBy">
                <option value="File_name">None</option>
                <option value="Model_name">Warning</option>
                <option value="Product_definition">Severe</option>
                <option value="Customers">Critical</option>
            </select> to <input type="text" placeholder='ExampleEmail@us.af.mil'/>
            <p>Comments <input type="text" /></p>
        </div>
        <button onClick={(e) => document.getElementById("myModal").style.display = "none"}>Cancel</button>
        <button onClick={(e) => document.getElementById("myModal").style.display = "none"}>Add</button>
        <div> 
        </div>
        </div>
  </div> );
}
 
export default Subscription_New;