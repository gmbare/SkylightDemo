import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductInformation.css"
import { BiDotsVerticalRounded } from 'react-icons/bi';
import ProductHistory from './History/History';
import { Link } from 'react-router-dom';
import { data } from '../../Data/data2'

const ProductInformation = (props) => {
    const params = useParams()
    const product_info = data.filter(product => params.Product_definition == product.Product_definition)
    console.log(product_info)

    return (<div>
        <h1 className='inline_block'>Product Details for {product_info[0].Product_definition}</h1>
        <div className="dropdown inline_block font-large">
            <button className="dropbtn font-xlarge"><BiDotsVerticalRounded /></button>
            <div className="dropdown-content">
                {/* <Link to={`/${result.Product_definition}/Product_Information`}>Data Routing</Link> */}
                <a href="#">Edit</a>
                <a href="#">Subscriptions</a>
            </div>
        </div>
        <div className='font-size-xlarge nowrap'>
            <p className='inline_block'>File Name Pattern <br />{product_info[0].File_name}</p>
            <div>
                <p className='inline_block float_left'>File Ingest date/time<br />{product_info[0].Last_ingested}</p>
                <p className='inline_block  inline_margin_left15'>Repository Directory<br />/Example/Directory/Structure </p>
            </div>
            <div>
                <p className='inline_block  float_left'>File Source<br />Example557th </p>
                <p className='inline_block inline_margin_left15'>Average File Size<br />123456 MB </p>
            </div>
            <p>Comments<br />POC: George Gumballs 402-123-4567 </p>
        </div>
        <h2>History</h2>
        <div>
            <ProductHistory numResults={5} searchResults={product_info} numDisplayResults={5} />
        </div>
    </div>);
}

export default ProductInformation;