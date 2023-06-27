import './App.css';
import{Routes, Route, Link, useNavigate, NavLink} from 'react-router-dom'; 

import {useState} from 'react'

import iceData from './pages/iceData';
import cakeData from './pages/cakeData';
import drinkData from './pages/drinkData';
import coffeeData from './pages/coffeeData';
import dessertData from './pages/dessertData';

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
import DetailDrink from './pages/DetailDrink';
import DetailCoffee from './pages/DetailCoffee';
import DetailDessert from './pages/DetailDessert';


function App() {

  // const navigate = useNavigate()
  const [ices] = useState(iceData)
  const [cakes] = useState(cakeData)
  const [drinks] =useState(drinkData)
  const [coffees] =useState(coffeeData)
  const [desserts]=useState(dessertData)


 
  const activeStyle = {
      color:'#fff',
      backgroundColor:'#ffa0c5',
      fontWeight:'bold'
    }
  

  return (
    <div className="App">
      
      <div className='cont'>
      <Header />
      

      <nav>
        <ul className='nav_wrap'>
          <li>
            <NavLink style={({isActive})=>(isActive ? activeStyle : {})} to='/'><p>Home</p></NavLink>
          </li>
          <li>
            <NavLink style={({isActive})=>(isActive ? activeStyle : {})} to='/icecream'><p>아이스크림</p></NavLink>
          </li>
          <li>
            <NavLink style={({isActive})=>(isActive ? activeStyle : {})} to='/cake'><p>케이크</p></NavLink>
          </li>
          <li>
            <NavLink style={({isActive})=>(isActive ? activeStyle : {})} to='/dessert'><p>디저트</p></NavLink>
          </li>
          <li>
            <NavLink style={({isActive})=>(isActive ? activeStyle : {})} to='/coffee'><p>커피</p></NavLink>
          </li>
          <li>
            <NavLink style={({isActive})=>(isActive ? activeStyle : {})} to='/drink'><p>음료</p></NavLink>
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
        <Route path='detaildrink/:id' element={<DetailDrink drinks={drinks}/>}></Route>
        <Route path='detailcoffee/:id' element={<DetailCoffee coffees={coffees}/>}></Route>
        <Route path='detaildessert/:id' element={<DetailDessert desserts={desserts}/>}></Route>
        

      </Routes>

      
      </div>
      <Footer />
    </div>
  );
}

export default App;
