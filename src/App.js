import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Mypage from './components/Mypage';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Form/> } />
        <Route path="/Home" element={<Home/>} />
        <Route  path ="/About" element={<About/>}/>
      </Routes>
      </Router>
    {/* <Home/> */}
    {/* <Form/> */}
    </div>
  );
}

export default App;
