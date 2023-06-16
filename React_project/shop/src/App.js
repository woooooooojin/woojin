import './App.css';
import Footer from './pages/footer';
import Header from './pages/header';
import Main from './pages/main';
import Quick from './pages/quick';
import VisualMain from './pages/visualmain';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <VisualMain></VisualMain>
      <Main></Main>
      <Footer></Footer>
      <Quick></Quick>
    </div>
  );
}

export default App;
