import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenre, filterCreated, orderBy } from "../../../1-actions/index";
import './FilterAndOrder.css'
export default function Filter() {
    const dispatch = useDispatch();
    const getStateGenres = useSelector((state) => state.getGenres)    

    useEffect(() => {
      dispatch(getGenres())
    }, [dispatch]);
  
    const handleGenreChange = (e) => {   
        dispatch(filterByGenre(e.target.value));
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

            <select id="select" onChange={(e) => handleGenreChange(e)}>
                <option value="All"> Genres </option>
                { getStateGenres.map((game) => (<option value={game.name}> {game.name} </option>) )}  
            </select>

        </div>
    </div>
      );

};