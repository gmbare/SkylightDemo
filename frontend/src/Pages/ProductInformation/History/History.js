import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi'

const ProductHistory = (props) => {
    return ( <table className='center_table'>
    <thead>
        <tr>
            <th colSpan={9}>File Name</th>
            <th >Ingest Date</th>
            <th >Ingest Time</th>
            {/* <th className='th_ds'>Cycle Time</th>
    <th className='th_ds'>Resolution</th> */}
            <th className='vis_hidden'> </th>
        </tr>
    </thead>
    <tbody>
        {props.searchResults.map((result, key) => {
            try {
                if (key < props.numDisplayResults) {
                    return (
                        <tr key={key} id={`${key}`}>
                            <td colSpan={9}>{`${result.File_name}`}</td>
                            <td >{`${result.Last_ingested}`}</td>
                            <td >{`${result.Last_ingested}`}</td>
                            <td>
                                <div className="dropdown">
                                    <button className="dropbtn"><BiDotsVerticalRounded/></button>
                                    <div className="dropdown-content">
                                        {/* <Link to={`/${result.Product_definition}/Product_Information`}>Reship</Link> */}
                                        <a href="#">Reship</a>
                                        <a href="#">View Logs</a>
                                    </div>
                                </div>
                            </td>
                            {/* <td className='td_more' id={`${key}-buttons`}><button className='flush_btn' onClick={(e) => {handleMoreButton(e,key)}}><BiDotsVerticalRounded/></button></td> */}
                        </tr>
                    );
                }
            } catch (error) { }
        })}
    </tbody>
</table>);
}
 
export default ProductHistory;