import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import './DetailCard.css'

export function DogDetailById() {
    const dog = useSelector((dataStore) => dataStore.dogById)

    console.log("dataDog:", dog)

        return (
        <div>
            <Nav/>    
            <div className="DogCard" >
                <h2> {dog.name} </h2>

                <img src= {dog.image} alt="" />
            
                <h3>Weight: {dog.weight} </h3>

                <h3>Height: {dog.height} </h3>
                
                <strong>Years of life:</strong>
                    <div>
                        <h4> {dog.yearsLife} </h4>
                    </div>
               
                <strong>Temperaments:</strong>
                <div className="detailTemperaments">
                { dog.temperament?.map((element, i) => (
                        <h4 key={i}> {element} </h4> 
                    )) }
                {console.log("temperament:", dog.temperament)}
                { dog.genres?.map((e, i) => (
                        <h4 key={i}> {e.name} </h4>
                    )) }
                {console.log("temperaments:", dog.genres)}
                </div>
            </div>
        </div>
    )
}

export default VideogameDetailById;
