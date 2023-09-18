import React,{useState} from "react";


const AddProduct=()=>{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
const [error,setError]=useState(false)

    const user_id=JSON.parse(localStorage.getItem('user'))._id;

    const addProduct=async()=>{
        console.warn(name,price,category,company);

        if(!name ||!price ||!category ||!company){
            setError(true)
            return false;
        }

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
            {error && !name && <span className="invalid-input">Enter a valid name</span>}
            
            
            <input type="text" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)} value={price} className="inputBox"/>
            {error && !price && <span className="invalid-input">Enter a valid price</span>}
            
            <input type="text" placeholder="Enter category" onChange={(e)=>setCategory(e.target.value)} value={category} className="inputBox"/>
            {error && !category && <span className="invalid-input">Enter a valid category</span>}
           
           
            <input type="text" placeholder="Enter company" onChange={(e)=>setCompany(e.target.value)} value={company} className="inputBox"/>
            {error && !company && <span className="invalid-input">Enter a valid company name</span>}
            
            <button className="appButton" onClick={addProduct} type="button">Add product</button>
        </div>
    )

}

export default AddProduct;