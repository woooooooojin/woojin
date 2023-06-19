// import { useLayoutEffect } from 'react';
import './App.css';
// import Footer from './pages/footer';
// import Header from './pages/header';
// import Main from './pages/main';
// import Quick from './pages/quick';
// import VisualMain from './pages/visualmain';
import{Routes, Route, Link} from 'react-router-dom';
import Home from './component/home'
import About from './component/about'
import Members from './component/Members';



function App() {
  return (
  
    <>

      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='about'>about</Link></li>
        <li><Link to='members'>members</Link></li>
      </ul>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='members/*' element={<Members/>}/>
      </Routes>

    </>
  );
}

export default App;
