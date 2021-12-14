import './App.css';
import Signup from './Signup'
import Login from './Login'
import Home from "./Home"
import Restaurant from './Restaurant'
import MenuAdd from './MenuAdd'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SecuredHome from './SecuredHome';

function App() {
  return (
    <BrowserRouter>
     <div>
       <div className="navbar">
         
          <Link to="/signup"><div> Sign up </div></Link>
          <Link to="/login"><div> Log In </div></Link>
  
          </div>
           <div>
            
          </div>
          <Routes>
            
            <Route path="/restaurant" element={ <Restaurant /> } />
            <Route path="/" element={ <Home />} />
            <Route path="/signin" element={ <Signup /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/securedhome" element={ <SecuredHome /> } />
            <Route path="/menuadd" element={ <MenuAdd /> } />

          </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
