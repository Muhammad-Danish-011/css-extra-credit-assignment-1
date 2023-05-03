import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    function handleHomeClick() {
        navigate('/About');
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
          <li><Link className='link' to="/Home">Home</Link></li>
          <li onClick={handleHomeClick}>About</li>
        </ul>
      </nav>
            <p>Pokémon is a popular media franchise that originated in Japan in the mid-1990s. It was created by Satoshi Tajiri and Ken Sugimori and was initially released as a video game for the Nintendo Game Boy. Since then, it has expanded into a wide range of media, including anime, manga, trading cards, toys, and movies.
                In the Pokémon universe, players take on the role of a Pokémon Trainer and journey through various regions, capturing and training different species of Pokémon to battle other trainers and compete in gym battles. Pokémon are fictional creatures with unique abilities and attributes, and there are over 800 different species of Pokémon to catch and collect.
                The franchise has a large and dedicated fan base, with numerous online communities, events, and merchandise. Pokémon has also had a significant impact on popular culture, inspiring fashion trends, music, and even academic research.
            </p>
            <button className="log-out" onClick={handleLogOut}>Logout</button>
        </div>
    )
}
export default About