import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../2- Paginate/paginate'
import Card from '../../5-Card/GameCard'
import Nav from '../../4-Nav/Nav.jsx';
import FilterAndOrder from '../4- FilterAndOrder/FilterAndOrder';
import './Home.css'

function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((dataStore) => dataStore.searchVideogames);
  console.log(videogames)
      return (
      <div>
        <Nav/>
        <FilterAndOrder/>
          <div className="container">
            <Paginate
              videogame={videogames}
              RenderComponent={Card}
              title="Videogames"
              pageLimit={7}
              dataLimit={15}
            />
          </div>
    </div>
      )
    


  };
  
  export default Home;