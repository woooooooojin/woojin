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
import VisualMain from './components/VisualMain';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      




      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='shirts' element={<Shirts/>}></Route>
         <Route path='pants' element={<Pants/>}></Route>
         <Route path='shoes' element={<Shoes/>}></Route>
         <Route path='tennis' element={<Tennis/>}></Route>
         <Route path='cart' element={<Cart/>}></Route>
        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
