import React from 'react';
import { useDispatch } from 'react-redux'
import { dogById } from '../../Actions/index';
import {Link} from 'react-router-dom';
import './DogCard.css'

export function DogCard({dog}) { 
  const dispatch = useDispatch();

    return (
            <div className="DogCard">
                <h2> {dog.name} </h2> 
                <img src={dog.img} alt="Image not found" />
                <p>Géneros:</p>
                <h4 className="temperaments">
                {dog.temperament ? dog.temperament.map((element) => (
                    <h4> {element}</h4> 
                )) : dog.temperaments.map((e) => (
                    <h4> {e.name} </h4>
                  ))
                }
                
                </h4>
                <Link to={`/dog/`} key={dog.id}> 
                <button onClick={() => dispatch(dogById(dog.id))}>Ver más</button>
                </Link>
           </div>
    )
};

export default DogCard;
