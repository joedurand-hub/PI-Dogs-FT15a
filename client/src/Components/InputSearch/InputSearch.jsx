import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchForGamesByName } from '../../1-actions/index';
import './InputSearch.css';

export function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
    };
    
    const handleClick = (e) => { // Resolver click (buscar)
        e.preventDefault();
        dispatch(SearchForGamesByName(name))
    };
    return (

        <div>
        <form>
            <input type="search" placeholder="Insert a name" className="InputSearch"
            onChange={(e) => handleInputChange(e)}></input>
            <button className="buttonSearch" type="submit" value="Buscar"
            onClick={(e) => handleClick(e)}> Search </button>
        </form>
        </div>
    )
};


export default Search;