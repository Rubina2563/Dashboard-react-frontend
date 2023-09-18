
import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
      <Routes>
<Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product listing component</h1>}/>
        <Route path='/add' element={<h1>{<AddProduct/>}</h1>}/>
        <Route path='/update' element={<h1>Product updating component</h1>}/>
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
