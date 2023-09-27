import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
const navigate=useNavigate();

useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})
    const handleLogin=async ()=>{
        console.warn(email,password);

        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
    'Content-type':'application/json'
} })

result=await result.json();

console.warn(result);

if(result.auth){
    localStorage.setItem('user',JSON.stringify(result.user));
    localStorage.setItem('token',JSON.stringify(result.auth));
    navigate('/');

}else{
    console.alert("user  details are not correct");
}
    }


    return(
        <div className="login">
          <input className="inputBox" type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
          <input className="inputBox" type="text" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>    
        <button onClick={handleLogin} className="appButton" type="button">Login</button>
        
        </div>
    )
}

export default Login;