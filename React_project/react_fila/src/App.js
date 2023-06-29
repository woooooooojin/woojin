import './App.css';
import{Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Shoes from './pages/Shoes';
import Tennis from './pages/Tennis';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Footer from './components/Footer';

import DetailShirts from './pages/DetailShirts'

import shirtsData from './pages/shirtsData'
import { useState } from 'react';


function App() {

  const [shirts] = useState(shirtsData)
  return (
    <div className="App">
      <Header/>
      <Nav/>
      




      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='shirts/*' element={<Shirts/>}></Route>
         <Route path='pants' element={<Pants/>}></Route>
         <Route path='shoes' element={<Shoes/>}></Route>
         <Route path='tennis' element={<Tennis/>}></Route>
         <Route path='cart' element={<Cart/>}></Route>

         <Route path='detailshirts/:id' element={<DetailShirts shirts={shirts}/>} ></Route>
        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
