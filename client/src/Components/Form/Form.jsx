import React from 'react';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postDog } from '../../Actions';
import Nav from '../Nav/Nav'
import './Form.css'

export function Form() {
  const dispatch = useDispatch();
  const getTemperamentsByState  = useSelector((state) => state.getTemperaments);

  const [name, setName] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [heightMin, setHeightMin] = useState("");
  const [heightMax, setHeightMax] = useState("");
  const [image, setImage] = useState("");
  const [yearsLife, setYearsLife] = useState("");
  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch]);



  const handleInputChange = function(e) { 
    e.preventDefault();
    const eTargetName = e.target.name
    switch (eTargetName) {
      case 'name':
        setName(e.target.value) 
          break;

      case 'weightMin':
        setWeightMin(e.target.value) 
          break;

      case 'weightMax':
        setWeightMax(e.target.value) 
          break;

      case 'heightMin':
        setHeightMin(e.target.value) 
          break;

      case 'heightMax':
        setHeightMax(e.target.value) 
          break;

      case 'image':
        setImage(e.target.value) 
          break;

      case 'yearsLife':
        setYearsLife(e.target.value) 
          break;

      case 'temperaments':
      setTemperaments([ ...temperaments, parseInt(e.target.value) ]); 
          break;

      default:
        break;
    }
  }

  const handleSubmit = function(e) { 
    e.preventDefault();
      const breedObject = {
      name: name,
      image: image,
      weight: `${weightMin} - ${weightMax}`,
      height: `${heightMin} - ${heightMax}`,
      yearsLife: yearsLife.toString(),
      temperament: temperaments,
      };


      dispatch(postDog(breedObject));
      e.target.reset(); 
      alert("Breed created!");
      
      setName('')
      setImage('')
      setWeightMin('')
      setWeightMax('')
      setHeightMin('')
      setHeightMax('')
      setYearsLife('')
      setTemperaments([])
  };


  return (
    <div className="formCreate">
        <Nav/>
  
<div className="container">
<strong className="title"> All your breed! </strong>
</div>

      <form className="form" onChange={(e) => handleInputChange(e)} onSubmit={(e) => handleSubmit(e)}  > 

      <div className="temperaments">

                    {getTemperamentsByState.map((temperament) => (
                      <div className="inputTemperament" key={temperament.name}>
                        
                        <input className="inputCreate"
                          id={temperament.id}
                          type="checkbox"
                          name="temperaments"
                          value={temperament.id}
                        ></input>
                        
                        <label> {temperament.name} </label>
                      </div>
                    ))}
                    
        </div>

        <div className="inputs">
          <label htmlFor='title'> Name </label>
          <input className="inputCreate" type='text' name='name' value={name} />

          <label htmlFor='image'> Image </label>
          <input className="inputCreate" type="text" name='image' value={image} />

          <label htmlFor='heightMin'> Height Min </label>
          <input className="inputCreate" type="text" name='heightMin' value={heightMin} />

          <label htmlFor='heightMax'> Height Max </label>
          <input className="inputCreate" type="text" name='heightMax' value={heightMax} />

          <label htmlFor='weightMin'> Weight Min  </label>
          <input className="inputCreate" type='text' name='weightMin' value={weightMin} />

          <label htmlFor='weightMax'> Weight Max  </label>
          <input className="inputCreate" type='text' name='weightMax' value={weightMax} />

          <label htmlFor='yearsLife'> Years of life </label>
          <input className="inputCreate" type='text' name='yearsLife' value={yearsLife} />

          <button type='submit' name='submit' value='Submit'> Add breed! </button>
        </div>

      </form>

    </div>
  )
};


export default Form;
