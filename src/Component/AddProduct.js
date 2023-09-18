import React,{useState} from "react";


const AddProduct=()=>{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const user_id=JSON.parse(localStorage.getItem('user'))._id;

    const addProduct=async()=>{
        console.warn(name,price,category,company);

    let  result=await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,company,user_id}),
        headers:{
            'Content-type':'application/json'
        }
       

    })

    result=await result.json();
    console.warn(result)
    }

    return(
        <div className="register">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name} className="inputBox"/>
            <input type="text" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)} value={price} className="inputBox"/>
            <input type="text" placeholder="Enter category" onChange={(e)=>setCategory(e.target.value)} value={category} className="inputBox"/>
            <input type="text" placeholder="Enter company" onChange={(e)=>setCompany(e.target.value)} value={company} className="inputBox"/>
            <button className="appButton" onClick={addProduct} type="button">Add product</button>
        </div>
    )

}

export default AddProduct;