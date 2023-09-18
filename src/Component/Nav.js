import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
const logout=()=>{
    localStorage.clear();
    navigate('/');
}

    return(
        <div>


            <img className="logo"  src="https://img.freepik.com/free-vector/wellness-center-logo-template-gold-professional-design-vector_53876-136292.jpg" alt="logo"></img>
            { auth? <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                
                 <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                 </ul> 
                 : 

                <ul className="right-nav">
               <li> <Link to="/signup">Sign Up</Link> </li>
               <li> <Link to="/login">login</Link></li>
               </ul>
}
        </div>
    )
}

export default Nav;