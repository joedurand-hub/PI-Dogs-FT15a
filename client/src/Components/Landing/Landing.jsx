import React from 'react';
import Landing from './Landing.css'
import { Link } from "react-router-dom";
// Imágen de background
// Una descripción
// Botón de ingreso a Home, antes de eso es sólo la landing

function LandingPage() {
    return (
  <div className="Landing">
      <div className="info">
      <h1>Henry Videogames</h1>
      <p>Video game information application for users of all ages.</p>
      <hr />
      <Link to={'/home'}>
        <button>HOME</button>
      </Link>
      </div>

    </div>
  )
};

  export default LandingPage;