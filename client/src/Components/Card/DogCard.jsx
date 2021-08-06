import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DogById } from '../../Actions/index';
import {Link} from 'react-router-dom';
import './DogCard.css'

export function DogCard({dog}) { 
  const dispatch = useDispatch();
  const temperaments = useSelector((dataStore) => dataStore.getTemperaments)
  console.log("temperamentos:", temperaments)
    return (
            <div className="DogCard">
                <h2> {dog.name} </h2> 
                <img src={dog.image} alt="Image not found" />
                <p>Temperaments:</p>
                <h4 className="temperaments"> {dog.temperament } </h4>
                { temperaments?.map((temperament, i) => (
                            <h4 key={i}> {temperament.name} </h4>
                     ))
                    }
                <Link to={`/dog/`} key={dog.id}> 
                <button onClick={() => dispatch(DogById(dog.id))}>Ver más</button>
                </Link>
           </div>
    )
};

export default DogCard;
