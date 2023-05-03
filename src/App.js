import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Mypage from './components/Mypage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        {/* <Router>
      <Routes>
        <Route path='/' element={<Form/> } />
        <Route path="/Home" element={<Form />} />
      </Routes>
      </Router> */}
    <Home/>
    </div>
  );
}

export default App;
