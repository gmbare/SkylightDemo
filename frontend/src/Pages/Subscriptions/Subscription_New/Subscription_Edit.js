import React, { useState } from 'react';
import '../Subscription_Main/Subscription_Main.css'
// import "C:\Users\dabom\Desktop\Sky_Demo\SkylightDemo\frontend\src\Images\DW-Params-Profile\Advanced.jpg"

const Subscription_Edit = (props) => {
    return ( <div><span className="close" onClick={(e) => document.getElementById("editModal").style.display = "none"}>&times;</span>
    <div> 
        <h1>File Details</h1>
        <div className='font-size-xlarge '>
            <p className='center inline_block '>Organization: <input type="text" className='inline_block' value="Example Pre-filled"/> </p>
            <p>Name: *<input type="text" value="Example Pre-filled"/> </p> 
            <label htmlFor="SearchBy">Type:</label>
            <select name="SearchBy" id="SearchBy">
                <option value="File_name">Local</option>
                <option value="Model_name">SFTP</option>
                <option value="Product_definition">FTP</option>
                <option value="Customers">Pull</option>
            </select>
            <br/>
            {/* <p>File Source <input type="text" /> </p> */}
            <label htmlFor="SearchBy">Status report at:</label>
            <select name="SearchBy" id="SearchBy">
                <option value="File_name">None</option>
                <option value="Model_name">Warning</option>
                <option value="Product_definition">Severe</option>
                <option value="Customers">Critical</option>
            </select> to <input type="text" placeholder='ExampleEmail@us.af.mil' value="Example Pre-filled email address"/>
            <p>Comments <input type="text" value="Example Pre-filled"/></p>
            <img src="DW-Params/Transport.jpg" alt="Nice"/>
            <img src="DW-Params/File-Assembly.jpg" alt="Nice"/>
            <img src="DW-Params/File-Packing.jpg" alt="Nice"/>
            <img src="DW-Params/File-Relay.jpg" alt="Nice"/>
            <img src="DW-Params/Advanced.jpg" alt="Nice"/>
        </div>
        <button onClick={(e) => document.getElementById("editModal").style.display = "none"}>Cancel</button>
        <button onClick={(e) => document.getElementById("editModal").style.display = "none"}>Add</button>
        <div> 
        </div>
        </div>
  </div> );
}
 
export default Subscription_Edit;