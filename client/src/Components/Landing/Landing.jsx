import React from 'react';
import Landing from './Landing.css'
import { Link } from "react-router-dom";

function LandingPage() {
    return (
  <div className="Landing">
      <div className="info">
      <h1>Henry Dogs</h1>
      <p>Dogs information application for users of all ages.</p>
      <hr />
      <Link to={'/home'}>
        <button>HOME</button>
      </Link>
      </div>

    </div>
  )
};

  export default LandingPage;