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
            { auth? <ul className="ul-nav">
                <li className="li-nav"><Link to="/">Product</Link></li>
                <li className="li-nav"><Link to="/add">Add Product</Link></li>
              
                
                 <li className="li-nav"><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                 </ul> 
                 : 

                <ul className="ul-nav right-nav">
               <li className="li-nav"> <Link to="/signup">Sign Up</Link> </li>
               <li className="li-nav"> <Link to="/login">login</Link></li>
               </ul>
}
        </div>
    )
}

export default Nav;