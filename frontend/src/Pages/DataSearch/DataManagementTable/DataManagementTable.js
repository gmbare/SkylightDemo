import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const DataManagementTable = (props) => {
    return ( <table className='center_table'>
    <thead>
        <tr>
            <th>Model Name</th>
            <th>Date Created</th>
            <th >Time Created</th>
            <th >Cycle Time</th>
            <th >Resolution</th>
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
                            <td>{`${result.Model_name}`}</td>
                            <td>{`${result.Date_created}`}</td>
                            <td>{`${result.Time_created}`}</td>
                            <td>{`${result.Cycle_Time}`}</td>
                            <td >{`${result.Resolution}`}</td>
                            <td>
                                <div className="dropdown">
                                    <button className="dropbtn"><BiDotsVerticalRounded/></button>
                                    <div className="dropdown-content">
                                        <Link to={`/${result.Product_definition}/Product_Information`}>Data Routing</Link>
                                        <a href="#">Data Management</a>
                                        <Link to="/Subimage"> Subscriptions </Link>
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
 
export default DataManagementTable;