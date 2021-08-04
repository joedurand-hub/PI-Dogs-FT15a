import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import './DetailCard.css'

export function VideogameDetailById() {
    const videogame = useSelector((dataStore) => dataStore.gameDetailById)

    console.log("dataVideogame", videogame)

        return (
        <div>
            <Nav/>    
            <div className="GameCard" >
            <h2> {videogame.name} </h2>
                <img src= {videogame.img} alt="" />
                <h3>Release Date: {videogame.releaseDate} </h3>
                <h3>Rating: {videogame.rating} </h3>
                
                <strong>Platforms:</strong>
                    <div>
                        <h4> {videogame.platforms} </h4>
                    </div>

                <strong>Description:</strong>
                <div className="description">
                    <p> {videogame.description}</p>
                </div>
               
                <strong>Genres:</strong>
                <div className="DetailGenres">
                {   
                    videogame.genre?.map((element, i) => (
                        <h4 key={i}> {element} </h4> 
                    ))
                }
                {console.log("genre:", videogame.genre)}
                {
                    videogame.genres?.map((e, i) => (
                        <h4 key={i}> {e.name} </h4>
                    ))
                }
                {console.log("genres:", videogame.genres)}
                </div>
            </div>
        </div>
    )
}

export default VideogameDetailById;
