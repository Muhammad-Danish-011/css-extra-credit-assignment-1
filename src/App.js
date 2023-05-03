import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import About from './components/About'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;