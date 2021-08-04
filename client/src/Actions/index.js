import axios from 'axios';

// Type de las actions
export const SEARCH_DOG                   = "SEARCH_DOG";
export const DOG_DETAIL_BY_ID_CARD        = "DOG_DETAIL_BY_ID_CARD";
export const ADD_NEW_DOG                  = "ADD_NEW_DOG"; 
export const GET_TEMPERAMENTS             = "GET_TEMPERAMENTS"; 
export const FILTER_BY_TEMPERAMENTS       = 'FILTER_BY_TEMPERAMENTS'; 
export const FILTER_BY_CREATED            = 'FILTER_BY_CREATED';
export const AZ                           = "AZ";
export const ZA                           = "ZA";
export const ASC                          = "ASC";
export const DESC                         = "DESC";
export const RESET                        = 'RESET';  

export const SearchDogsByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
         dispatch({type: SEARCH_DOG, payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export function DogById(id) {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/videogame/${id}`)
            return dispatch({type: DOG_DETAIL_BY_ID_CARD, payload: response.data})
         } catch(error) {
            console.log(error)
         }
    }
}

export function postDog(game) {
    try {
        return async function (dispatch) {
            const response = await axios.post('http://localhost:3001/videogame', game
            );
            console.log(response)
            return dispatch({type: ADD_NEW_VIDEOGAME, payload: response.data});
    }
    } catch (error) {
        console.log(error)
    }
}

export function getTemperaments() {
    return async function(dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/genres')
            return dispatch({type: GET_GENRES, payload: response.data}) 

        } catch(error) {
            console.log(error)
        }
    }
}

export function filterByTemperaments(payload) {           
    return { type: FILTER_BY_GENRE, payload }
}

export function filterCreated(payload) {  
    return { type: FILTER_BY_CREATED, payload }    
};
export const orderBy = (sort) => (dispatch) => {  
    dispatch({
        type: sort,        
      })    
  };

export const resetAll = () => { // Feature no implementada
    return (dispatch) => {
        dispatch({type: RESET})
    }
}