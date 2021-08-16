import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import './DetailCard.css'

export function DogDetailById() {
    const dog = useSelector((dataStore) => dataStore.detailDogById)
    console.log("dataDog:", dog)
    
        return (
        <div>
            <Nav/>    
            <div className="DogCard" >
                <h2> {dog.name} </h2>

                <img src= {dog.image} alt="Image not found" />
            
                <h3>Weight min and max: </h3>
                <h4>{dog.weight}</h4>
                <h3>Height min and max: </h3>
                <h4>{dog.height}</h4>
                <strong>Years of life:</strong>
                <div>
                    <h4>Approximate {dog.yearsLife} years</h4>
                </div>
               
                <strong>Temperaments:</strong>
                <div className="detailTemperaments">
                    { dog.temperaments ?  dog.temperaments.map((breed, index) => (
                        <h4 key={index}> {breed.name} </h4>
                    )) 
                    : <h4 className="temperament"> {dog.temperament} </h4> } 

                </div>
                <div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default DogDetailById;
