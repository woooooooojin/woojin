import './App.css';
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 

import {useState} from 'react'

import iceData from './pages/iceData'
import cakeData from './pages/cakeData';

import Header from './components/Header';
import Footer from './components/Footer';
import Icecream from './pages/Icecream';
import Cake from './pages/Cake';
import Dessert from './pages/Dessert';
import Coffee from './pages/Coffee';
import Drink from './pages/Drink';
import Home from './pages/Home';
import Detail from './pages/Detail'
import Cart from './pages/Cart';
import DetailCake from './pages/DetailCake';


function App() {

  // const navigate = useNavigate()
  const [ices] = useState(iceData)
  const [cakes] = useState(cakeData)

  return (
    <div className="App">
      
      <div className='cont'>
      <Header />
      

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
        <Route path='/' element={<Home/>}/>
        <Route path='icecream/*' element={<Icecream/>} />
        <Route path='cake/*' element={<Cake />}></Route>
        <Route path='dessert/*' element={<Dessert />}></Route>
        <Route path='coffee/*' element={<Coffee />}></Route>
        <Route path='drink/*' element={<Drink />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        
        <Route path='detail/:id' element={<Detail ices={ices}/>}></Route>
        <Route path='detailcake/:id' element={<DetailCake cakes={cakes}/>}></Route>
        

      </Routes>

      
      </div>
      <Footer />
    </div>
  );
}

export default App;
