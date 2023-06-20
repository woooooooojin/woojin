import './App.css';

import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar,Row,Col }from 'react-bootstrap';

import {useState} from 'react'
import data from './pages/productData'


import Header from './pages/Header';
import About from './pages/About';
import Detail from './pages/Detail';
import Footer from './pages/Footer';



function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)


  return (
    <div className="App">

      <Header />

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{'/'}}>title</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/info')}}>Info</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/loca')}}>Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>




      



      <Routes>

        <Route path ='/' element={
            <Container>
              <Row>
                {
                  bests.map((best,index)=>{
                    return(
                      <Col key={index}>
                        <Link to={`detail/${index}`}>
                          <img src={best.image} alt='img' style={{width:280}}/>
                          <h4>{best.title}</h4>
                          <p>{best.desc}</p>
                          <p>{best.price}</p>
                        </Link>
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>
        }></Route>

        <Route path ='about' element={<About/>}>
          <Route path='info' element={<div>info</div>}></Route>
          <Route path='loca' element={<div>loca</div>}></Route>
        </Route>

        <Route path='detail/:id' element={<Detail bests={bests}/>}></Route>
        

      </Routes>
      


      <Footer />
    </div>
  );
}

export default App;
