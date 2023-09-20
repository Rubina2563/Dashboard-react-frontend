import React,{useState} from "react";


const UpdateProduct=()=>{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");




    const UpdateProduct=async()=>{
        console.warn(name,price,category,company)
       
    }

    return(
        <div className="register">
            <h1> Update Product</h1>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name} className="inputBox"/>
        
            
            
            <input type="text" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)} value={price} className="inputBox"/>
           
            
            <input type="text" placeholder="Enter category" onChange={(e)=>setCategory(e.target.value)} value={category} className="inputBox"/>
            
           
           
            <input type="text" placeholder="Enter company" onChange={(e)=>setCompany(e.target.value)} value={company} className="inputBox"/>
         
            
            <button className="appButton" onClick={UpdateProduct} type="button">Add product</button>
        </div>
    )

}

export default UpdateProduct;