
import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductList';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
      <Routes>
<Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<h1>{<AddProduct/>}</h1>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/Profile' element={<h1>Profile component</h1>}/>
        <Route path='/Logout' element={<h1>Logout component</h1>}/>
        </Route>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
