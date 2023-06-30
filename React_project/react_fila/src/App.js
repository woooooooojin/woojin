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
import DetailPants from './pages/DetailPants'

import shirtsData from './pages/shirtsData'
import pantsData from './pages/pantsData'
import shoesData from './pages/shoesData'
import tennisData from './pages/tennisData'
import { useState } from 'react';
import DetailShoes from './pages/DetailShoes';
import DetailTennis from './pages/DetailTennis';


function App() {

  const [shirts] = useState(shirtsData)
  const [pants] = useState(pantsData)
  const [shoes] = useState(shoesData)
  const [tennis] = useState(tennisData)
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
         <Route path='detailpants/:id' element={<DetailPants pants={pants}/>} ></Route>
         <Route path='detailshoes/:id' element={<DetailShoes shoes={shoes}/>} ></Route>
         <Route path='detailtennis/:id' element={<DetailTennis tennis={tennis}/>} ></Route>
        
      </Routes>

      <Footer/>

      <button 
        className='top_btn'
        onClick={() => {
        window.scrollTo({
          top: 0,
          });
        }}>
        top
      </button>



    </div>
  );
}

export default App;
