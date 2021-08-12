import React from 'react';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postDog } from '../../Actions';
import Nav from '../Nav/Nav'
import './Form.css'

export function Form() {
  const dispatch = useDispatch();
  const getTemperamentsByState  = useSelector((state) => state.getTemperaments);

  const [dog, setDog] = useState({
    name: '',
    image: '',
    height: [0, 0],
    weight: [0, 0],
    lifeYears: '',
    temperaments: '',

  })

  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch]);


  const handleInputChange = function(e) { // Considero temperaments y platforms que son arrays
    if (e.target.name === "height" || e.target.name === "weight") {
      const arrayHeightAndWeight = dog[e.target.name];
      console.log(e.target.value)
      setDog({ ...dog, [e.target.name]: arrayHeightAndWeight.concat(e.target.value) }); // Su nuevo State es el array con la info
    } else {
      setDog({ ...dog, [e.target.name]: e.target.value }); // Sino setea lo que haya
    }
  }

  const handleSubmit = function(e) { 
    e.preventDefault();
      const breedObject = {
      name: dog.name,
      image: dog.image,
      height : `${dog.height[0]} - ${dog.height[1]}`,
      weight : `${dog.weight[0]} - ${dog.weight[1]}`,
      lifeYears: dog.lifeYears,
      temperaments: dog.temperaments,
      };


      dispatch(postDog(breedObject));
      e.target.reset(); 
      alert("Breed created!");
      
      setDog({
        name: '',
        image: '',
        height: [0, 0],
        weight: [0, 0],
        lifeYears: '',
        temperaments: '',
      });

    };

  return (
    <div className="formCreate">
      <div>
        <Nav/>
      </div>
    <div>
  

      <form className="form" onChange={(e) => handleInputChange(e)} onSubmit={(e) => handleSubmit(e)}  > 
        
      <div className="temperaments">
        <label htmlFor='temperaments'><strong> Temperaments </strong></label>
                <div className="containerTemperaments">
                    {getTemperamentsByState.map((temperament) => (
                      <div className="inputTemperament" key={temperament.name}>
                        <input className="inputCreate"
                          type="checkbox"
                          name="temperaments"
                          value={temperament.id}
                        ></input>
                        <label name={temperament}> {temperament.name} </label>
                      </div>
                    ))}
                </div>
        </div>

        <div className="inputs">
          <strong> Form </strong>
          <label htmlFor='title'> Name </label>
          <input className="inputCreate" type='text' name='name' value={dog.name} />

          <label htmlFor='image'> Image </label>
          <input className="inputCreate" type="text" name='image' value={dog.image} />

          <label htmlFor='height'> Height min and max </label>
          <input className="inputCreate" type="text" name='height' value={dog.height} />

          <label htmlFor='weight'> Weight min and max </label>
          <input className="inputCreate" type='text' name='weight' value={dog.weight} />

          <label htmlFor='lifeYears'> Years of life </label>
          <input className="inputCreate" type='text' name='lifeYears' value={dog.lifeYears} />

          <button type='submit' name='submit' value='Submit'> Add breed! </button>
        </div>


    {/* <div className="platforms">
                    
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
                  </div> */}


      </form>

    </div>
    </div>
  )
};


export default Form;
