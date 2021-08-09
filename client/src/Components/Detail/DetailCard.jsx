import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import './DetailCard.css'

export function DogDetailById() {
    const dog = useSelector((dataStore) => dataStore.detailDogById)
    const temperaments = useSelector((dataStore) => dataStore.getTemperaments)
    console.log("dataDog:", dog)
    console.log("temperamentos:", temperaments)
        return (
        <div>
            <Nav/>    
            <div className="DogCard" >
                <h2> {dog.name} </h2>

                <img src= {dog.image} alt="Image not found" />
            
                <h3>Weight: {dog.weight} </h3>

                <h3>Height: {dog.height} </h3>
                
                <strong>Years of life:</strong>
                <div>
                    <h4> {dog.yearsLife} </h4>
                </div>
               
                <strong>Temperaments:</strong>
                <div className="detailTemperaments">
                    <h4> { dog.temperament } </h4>

                </div>
                <div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default DogDetailById;
