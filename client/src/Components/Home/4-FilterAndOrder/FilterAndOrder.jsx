import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filterByTemperaments, filterCreated, orderBy } from "../../../Actions/index";
import './FilterAndOrder.css'
export default function Filter() {
    const dispatch = useDispatch();
    const getTemperamentState = useSelector((state) => state.getTemperaments)    

    useEffect(() => {
      dispatch(getTemperaments())
    }, [dispatch]);
  
    const handleTemperamentsChange = (e) => {   
        dispatch(filterByTemperaments(e.target.value));
    }  

    const onOrderChange = (e) => {
      dispatch(orderBy(e.target.value));   
    }
    
    const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value))
    }


    return (
    <div>
        <div className="DivSelect">

           <select id="select" onChange={(e) => handleFilterCreated(e)}>
                <option value='All'> All games </option>     
                <option value='DB'> Data Bases </option>
                <option value="API"> All Api</option>
            </select>
            
            <select id="select" onChange={onOrderChange}>
                <option value="All"> Order </option>
                <option value="AZ"> Ascending (A - Z) </option>
                <option value="ASC"> Rating + (Worse - Best)</option>
                <option value="ZA"> Descending (Z - A) </option>
                <option value="DESC">Rating - (Best - Worse)</option>
            </select>

            <select id="select" onChange={(e) => handleTemperamentsChange(e)}>
                <option value="All"> Genres </option>
                { getTemperamentState.map((dog) => (<option value={dog.name}> {dog.name} </option>) )}  
            </select>

        </div>
    </div>
      );

};