import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../2-Paginate/paginate'
import DogCard from '../../Card/DogCard.jsx'
import Nav from '../../Nav/Nav.jsx';
import FilterAndOrder from '../3-FilterAndOrder/FilterAndOrder.jsx';
import './Home.css'

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((dataStore) => dataStore.searchDog);
  console.log("searchDogs", dogs)
      return (
      <div>
        <Nav/>
        <FilterAndOrder/>
          <div className="container">
            <Paginate
              dog={dogs}
              RenderComponent={DogCard}
              title="Breeds of the world"
              pageLimit={20}
              dataLimit={9}
            />
          </div>
    </div>
      )
    


  };
  
  export default Home;