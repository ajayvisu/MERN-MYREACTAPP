import React, { useState, useEffect } from "react";
import './Products.css';
import axios from "axios";
// import productsList from "./ProductList";

const Products = ()=>{
    const [productsList, setproductsList] = useState("");
    
    const productsListData = async()=>{
        // const result = await axios.get("http://192.168.0.104:8000/api/products/getall")
        const result = await axios.get("http://localhost:8000/api/products/getall")
            .then((Response)=>{
                setproductsList(Response.data.result)
                console.log("Result", productsList)})
            .catch((error)=>{console.log(error)})
            
        }
   
    console.log(productsList);

    const productsDisplay = ()=>{
        return(
            productsList.map((curElem, item)=>
            <div class="Products1">
            <div class="prod" key={item}>
                {/* <div class="prod_img">
                    <img src={item.thumb} />
                </div> */}
                <div class="prod_header">
                    <h2>{item.desc}</h2>
                    <h6>{item.name}</h6>
                    <h5>{item.price}</h5>
                    <div class="btn_prod">Add to Cart</div>
                </div>
            </div>
            </div>
            )
        )
    }

    return (
        <div class="Products1">
            <button type="button" onClick={productsListData}>Products List</button> 
            {/* <h3 onClick={productsListData}>Products</h3> */}
            {productsDisplay}
        </div>
     );
}

export default Products;