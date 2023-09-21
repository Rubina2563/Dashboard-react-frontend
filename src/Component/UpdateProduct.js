import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";



const UpdateProduct=()=>{

    let [name,setName]=React.useState("");
    let [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const params=useParams();
    //const navigate=useNavigate();
    
    

   

    
let getProductDetails = async ()=>{
 
    let result = await fetch(`http://localhost:5000/products/${params.id}`);
    result=await result.json();
    
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);

}



useEffect(()=>{
    
    getProductDetails()
    
},[])



    const updateProducts= async ()=>{
        console.warn(name,price,category,company,params.id);

        let result=await fetch(`http://localhost:5000/products/${params.id}`,{
            method: "put",
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'Context-Type':'application/json'
            }

        });

        result=await result.json();
         // console.warn(result)
        //  console.warn(name,price,category,company,params.id);
       
    }


    

    

    return(
        <div className="register">
            <h1> Update Product</h1>
            <input type="text"  onChange={(e)=>setName(e.target.value)} value={name}   className="inputBox"/>
        
            <input type="text"  onChange={(e)=>setPrice(e.target.value)}  value={price} className="inputBox"/>
           
            
            <input type="text"  onChange={(e)=>setCategory(e.target.value)} value={category} className="inputBox"/>
            
           
           
            <input type="text"  onChange={(e)=>setCompany(e.target.value)} value={company} className="inputBox"/>
         
            
            <button className="appButton" onClick={updateProducts} type="button">Add product</button>
        </div>
    )

}

export default UpdateProduct;