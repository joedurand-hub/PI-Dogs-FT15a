import React from 'react';
import {NavLink} from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch';
import './nav.css';

export function Nav() {
  return (
<div>
    <nav className="Nav">  
    <NavLink to={'/home'}>
      <button className="home"> Home </button>
    </NavLink>
     <InputSearch/>
    {/* <NavLink to={'/create'}>
      <button className="buttonCreate"> Create </button>
    </NavLink> */}
    </nav>
</div>
  );
};
export default Nav;