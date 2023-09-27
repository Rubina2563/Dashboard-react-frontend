import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts]=useState([]);

useEffect(()=>{

    getProducts();

},[]);

const getProducts=async()=>{
let result=await fetch("http://localhost:5000/products",{
    headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
});
result=await result.json();
setProducts(result);
}

console.warn("products",products);

const deleteProduct=async (id)=>{
   let result=await  fetch(`http://localhost:5000/products/${id}`,{
    method:"delete",
    headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
   })

   result=await result.json();

   if(result){

    alert("Product deleted");
    getProducts();

   }else{

   }

}

const searchHandle=async (e)=>{
const key=e.target.value;
let result=await fetch(`http://localhost:5000/search/${key}`,{
    headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
});

if(key){
    result=await result.json();
    if(result){
        setProducts(result);
    }
}else{
    getProducts()
}
}



    return(
        <div className="product-div" >
            <h1>Product list</h1>

            <input type="text" placeholder="search product" className="search-box" onChange={searchHandle}/>
            <ul>
                <li className="product-li">S.No</li>
                <li className="product-li">Name</li>
                <li className="product-li">Price</li>
                <li className="product-li">Category</li>
                <li className="product-li">Operation</li>
            </ul>

            {
               products.length>0? products.map((item,index)=>
                    <ul key={item._id}>
                    <li className="product-li">{index+1}</li>
                    <li className="product-li">{item.name}</li>
                    <li className="product-li">{item.price}</li>
                    <li className="product-li">{item.category}</li>
                    <li className="update-button"><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                  <button className="product-button"><Link to={"/update/"+item._id}>Update </Link></button>
                    </li>
                </ul>   
                ):<h1>No result found</h1>
            }
        </div>
    )
}
 export default ProductList;