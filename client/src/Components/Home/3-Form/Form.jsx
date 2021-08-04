import React from 'react';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postGame } from '../../../1-actions';
import Nav from '../../4-Nav/Nav'
import './Form.css'

export function Form() {
  const dispatch = useDispatch();
  const getGenresByState  = useSelector((state) => state.getGenres);

  console.log("State de genre:", getGenresByState)
  
  const [game, setGame] = useState({
    name: '',
    description: '',
    img: '',
    releaseDate: '',
    rating: 0,
    genres: [],
    platforms: []
  })

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);

  const platformSelects = ["PlayStation", "PlayStation-2", "PlayStation-3", "PlayStation-4", "PlayStation-5", "PC", "iOS", "Android", "macOS", "Xbox", "Nintendo", "Atari", "Genesis"]
  
  const handleInputChange = function(e) { // Considero genres y platforms que son arrays
    if (e.target.name === "genres" || e.target.name === "platforms") {
      const arrayGenresOrPlatforms = game[e.target.name];
      setGame({ ...game, [e.target.name]: arrayGenresOrPlatforms.concat(e.target.value) }); // Su nuevo State es el array con la info
    } else {
      setGame({ ...game, [e.target.name]: e.target.value }); // Sino setea lo que haya
    }
  }

  const handleSubmit = function(e) { 
    e.preventDefault();

      const videogameObject = {
      name: game.name,
      description: game.description,
      img: game.img,
      releaseDate: game.releaseDate,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
      };


      dispatch(postGame(videogameObject));
      e.target.reset(); 
      alert("Videogame created!");
      
      setGame({
        name: "",
        description: "",
        img: "",
        releaseDate: "",
        rating: 0,
        genres: [],
        platforms: [],
      });

    };

  return (
    <div className="formCreate">
      <div>
        <Nav/>
      </div>
    <div>
  

      <form className="form" onChange={(e) => handleInputChange(e)} onSubmit={(e) => handleSubmit(e)}  > 
        
      <div className="genres">
        <label htmlFor='genres'><strong> Genres </strong></label>
                <div className="containerGenres">
                    {getGenresByState.map((genre) => (
                      <div className="inputGenre" key={genre.name}>
                        <input className="inputCreate"
                          type="checkbox"
                          name="genres"
                          value={genre.id}
                        ></input>
                        <label name={genre}> {genre.name} </label>
                      </div>
                    ))}
                </div>
        </div>

        <div className="inputs">
          <strong> Form </strong>
          <label htmlFor='title'> Name </label>
          <input className="inputCreate" type='text' name='name' value={game.name} />

          <label htmlFor='description'> Description </label>
          <textarea name='description' value={game.description} />

          <label htmlFor='image'> Image </label>
          <input className="inputCreate" type="text" name='img' value={game.img} />

          <label htmlFor='releaseDate'> Release Date </label>
          <input className="inputCreate" type='date' name='releaseDate' value={game.releaseDate} />

          <label htmlFor='rating'> Rating </label>
          <input className="inputCreate" type="number" name='rating' value={game.rating} />

          <button type='submit' name='submit' value='Submit'> Add videogame!</button>
        </div>


    <div className="platforms">
                    
        <label htmlFor='platforms'> <strong> Platforms </strong> </label>
                {platformSelects.map((platf) => (
                    <div className="containerPlatforms" key={platf}>
                      <input className="inputCreate"
                        type="checkbox"
                        name="platforms"
                        value={platf}
                      ></input>
                      <label name={platf}> {platf} </label>
                    </div>
                ))}
                  </div>


      </form>

    </div>
    </div>
  )
};


export default Form;