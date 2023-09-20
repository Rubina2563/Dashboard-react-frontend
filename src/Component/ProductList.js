import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts]=useState([]);

useEffect(()=>{

    getProducts();

},[]);

const getProducts=async()=>{
let result=await fetch("http://localhost:5000/products");
result=await result.json();
setProducts(result);
}

console.warn("products",products);

const deleteProduct=async (id)=>{
   let result=await  fetch(`http://localhost:5000/products/${id}`,{
    method:"delete"
   })

   result=await result.json();

   if(result){

    alert("Product deleted");
    getProducts();

   }else{

   }

}

    return(
        <div className="product-div" >
            <h1>Product list</h1>
            <ul>
                <li className="product-li">S.No</li>
                <li className="product-li">Name</li>
                <li className="product-li">Price</li>
                <li className="product-li">Category</li>
                <li className="product-li">Operation</li>
            </ul>

            {
                products.map((item,index)=>
                    <ul key={item._id}>
                    <li className="product-li">{index+1}</li>
                    <li className="product-li">{item.name}</li>
                    <li className="product-li">{item.price}</li>
                    <li className="product-li">{item.category}</li>
                    <li className="update-button"><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                  <button className="product-button"><Link to={"/update/"+item._id}>Update </Link></button>
                    </li>
                </ul>   
                )
            }
        </div>
    )
}
 export default ProductList;