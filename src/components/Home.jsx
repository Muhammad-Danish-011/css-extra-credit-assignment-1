import { useState } from "react";
import Pokemon from './Pokemon'
import Sidebar from './Sidebar'
import UseFetch from "../Hooks/UseFetch";
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const fetch = UseFetch({ url: url });
    const [activePokemon, setActivePokemon] = useState("bulbasaur");
    function handleActivePokemon(e) {
      setActivePokemon(e.target.innerText);
    }
    function handleHomeClick() {
      navigate('/Home');
    }
    function handleUrl(e) {
      setUrl(e.target.value);
    }
    function handleLogOut(){
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      navigate("/");
    }
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li  onClick={handleHomeClick}>Home</li>
            <li ><Link  className="link" to="/About">About</Link></li>
          </ul>
        </nav>
      <div className="container">
        <div  className="sidebar">
          {!fetch.loading && fetch.data.length !== 0 ? (
            <Sidebar
              data={fetch.data}
              handleActivePokemon={handleActivePokemon}
              handleUrl={handleUrl}
            />
          ) : (
            <p>loading</p>
          )}
        </div>
        <Pokemon name={activePokemon} />
      </div>
      <button className="log-out" onClick={handleLogOut}>Log out</button>
      </div>
    );
}
export default Home;