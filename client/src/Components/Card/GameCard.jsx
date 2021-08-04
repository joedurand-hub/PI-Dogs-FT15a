import React from 'react';
import { useDispatch } from 'react-redux'
import { VideogameByID } from '../../1-actions/index';
import {Link} from 'react-router-dom';
import './GameCard.css'

export function GameCard({videogame}) { // Renderizo los datos en cada Card
  const dispatch = useDispatch();

    return (
            <div className="GameCard">
                <h2> {videogame.name} </h2> 
                <img src={videogame.img} alt="Image not found" />
                <p>Géneros:</p>
                <h4 className="genres">
                {videogame.genre ? videogame.genre.map((element) => (
                    <h4> {element}</h4> 
                )) : videogame.genres.map((e) => (
                    <h4> {e.name} </h4>
                    ))
                }
                
                </h4>
                <Link to={`/videogame/`} key={videogame.id}> 
                <button onClick={() => dispatch(VideogameByID(videogame.id))}>Ver más</button>
                </Link>
           </div>
    )
};

export default GameCard;
