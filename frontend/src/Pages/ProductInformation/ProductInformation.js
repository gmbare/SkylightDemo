import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductInformation.css"
import ProductHistory from './History/History';
import { data } from '../../Data/data2'

const ProductInformation = (props) => {
    const params = useParams()
    const product_info = data.filter(product => params.Product_definition == product.Product_definition)
    console.log(product_info)

    return ( <div> 
        <h1>File Details</h1>
        <div className='font-size-xlarge'>
            <p>File name <br/>{product_info[0].File_name} </p>
            <p>File Ingest date/time<br/>{product_info[0].Last_ingested} </p>
            <p>Repository Directory<br/>/Example/Directory/Structure </p>
            <p>File Source<br/>Example557th </p>
            <p>Average File Size<br/>123456 MB </p>
            <p>Comments<br/>POC: George Gumballs 402-123-4567 </p>
        </div>
            <h2>History</h2>
        <div> 
        <ProductHistory numResults={5} searchResults={product_info} numDisplayResults={5} />
        </div>
        </div> );
}
 
export default ProductInformation;