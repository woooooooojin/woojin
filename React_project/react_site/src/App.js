import './App.css';

import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar,Row,Col }from 'react-bootstrap';

import {useState} from 'react'


import Header from './components/Header';
import Footer from './components/Footer';
import Icecream from './pages/Icecream';
import Cake from './pages/Cake';
import Dessert from './pages/Dessert';
import Coffee from './pages/Coffee';
import Drink from './pages/Drink';
import Home from './pages/Home';


function App() {

  const navigate = useNavigate()


  return (
    <div className="App">
      <Header />
      <div className='cont'>

      

      <nav>
        <ul className='nav_wrap'>
          <li>
            <Link to='/'><p>Home</p></Link>
          </li>
          <li>
            <Link to='/icecream'><p>아이스크림</p></Link>
          </li>
          <li>
            <Link to='/cake'><p>케이크</p></Link>
          </li>
          <li>
            <Link to='/dessert'><p>디저트</p></Link>
          </li>
          <li>
            <Link to='/coffee'><p>커피</p></Link>
          </li>
          <li>
            <Link to='/drink'><p>음료</p></Link>
          </li>
        </ul>
      </nav>


      




      



      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='icecream' element={<Icecream />}></Route>
        <Route path='cake' element={<Cake />}></Route>
        <Route path='dessert' element={<Dessert />}></Route>
        <Route path='coffee' element={<Coffee />}></Route>
        <Route path='drink' element={<Drink />}></Route>
        

      </Routes>

      
      </div>
      <Footer />
    </div>
  );
}

export default App;
