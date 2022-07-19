import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import './DataSearch.css'
import { data } from '../../Data/data2'

const DataSearch = (props) => {
    const [searchResults, setsearchResults] = useState(data)
    const [numResults, setnumResults] = useState(0)
    const [numDisplayResults, setnumDisplayResults] = useState(10)

    // console.log(data)

    const handleSearch = async (e) => {
        e.preventDefault()
        let searchPtrn = new RegExp(document.getElementById("searchBar").value, 'gi')
        console.log(document.getElementById('SearchBy').value)
        setsearchResults(data.filter(result => result[document.getElementById('SearchBy').value].match(searchPtrn)))
        // console.log(searchResults.length)
        setnumResults(searchResults.length)
    }

    const handleMoreButton = async (e, key) => {
        e.preventDefault()
        console.log(key)

    }

    return (<div>
        <form onSubmit={handleSearch}>
            <FaSearch className='icon_size' /><input className='searchbar_size' type='text' id='searchBar' />
        </form>
        <div>
            <h3>Search Results</h3>
            <label htmlFor="SearchBy">Filters:</label>
            <select name="SearchBy" id="SearchBy">
                <option value="File_name">File Name</option>
                <option value="Model_name">Model</option>
                <option value="Product_definition">Product Definition</option>
                <option value="Customers">Customers</option>
            </select>
        </div>
        <div className='center_table_div'>
        <table className='center_table'>
            <thead>
                <tr>
                    <th colSpan={9}>File Pattern</th>
                    <th colSpan={4}>Product Definition</th>
                    <th >Last Ingest</th>
                    {/* <th className='th_ds'>Cycle Time</th>
            <th className='th_ds'>Resolution</th> */}
                    <th className='vis_hidden'> </th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((result, key) => {
                    try {
                        if (key < numDisplayResults) {
                            return (
                                <tr key={key} id={`${key}`}>
                                    <td colSpan={9}>{`${result.File_name}`}</td>
                                    <td colSpan={4}>{`${result.Product_definition}`}</td>
                                    <td >{`${result.Last_ingested}`}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="dropbtn"><BiDotsVerticalRounded/></button>
                                            <div class="dropdown-content">
                                                <a href="#">Data Routing</a>
                                                <a href="#">Data Management</a>
                                                <a href="#">Subscriptions</a>
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
        </table>
        </div>
        <div className='margin-top-5rem '>
            <label htmlFor="resultCount">Filters:</label>
            <select name="resultCount" id="resultCount" onChange={(e) => { setnumDisplayResults(e.target.value) }} >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
            1-10 of {numResults}
        </div>
    </div>);
}


export default DataSearch;