import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './DataSearch.css'
import { data } from '../../Data/data2'
import DataRouteTable from './DataRouteSearchTable/DataRouteSearchTable';
import DataManagementTable from './DataManagementTable/DataManagementTable';


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

    const handleTableSwitch = async (e) => {
        // e.preventDefault()
        document.getElementById(`div_${e.target.id}`).className = "center_table_div"
        console.log("success")
        console.log(e.target.id)
        console.log(e.target.value)
        document.getElementById(`div_${e.target.value}`).className = "vis_hidden"

    }

    return (<div>
        <form onSubmit={handleSearch}>
            <FaSearch className='icon_size' /><input className='searchbar_size' type='text' id='searchBar' />
        </form>
        <div className='font-size-xlarge'>
            <label htmlFor="SearchBy">Filters:</label>
            <select name="SearchBy" id="SearchBy">
                <option value="File_name">File Name</option>
                <option value="Model_name">Model</option>
                <option value="Product_definition">Product Definition</option>
                <option value="Customers">Customers</option>
            </select>
            <h3>Search Results</h3>
            <label htmlFor="DataRoute">Data Routing:</label>
            <input type="radio" id="DataRoute" name="Table-Type" onChange={(e) => {handleTableSwitch(e)}} value="DataManagement" defaultChecked/> 
            <label htmlFor="DataRouting">Data Management:</label>
            <input type="radio" id="DataManagement" name="Table-Type" value="DataRoute" onChange={(e) => {handleTableSwitch(e)}}/>
        </div>

        <div className='center_table_div' id="div_DataRoute">
        <DataRouteTable numResults={numResults} searchResults={searchResults} numDisplayResults={numDisplayResults} />
        </div>
        <div className='vis_hidden' id="div_DataManagement">
        <DataManagementTable numResults={numResults} searchResults={searchResults} numDisplayResults={numDisplayResults} />
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