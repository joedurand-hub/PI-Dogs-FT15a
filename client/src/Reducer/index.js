import { 
    SEARCH_DOG,
    DOG_DETAIL_BY_ID_CARD,
    ADD_NEW_DOG,
    GET_TEMPERAMENTS,
    FILTER_BY_TEMPERAMENTS,
    FILTER_BY_CREATED,
    AZ,
    ZA,
    ASC,
    DESC,
    RESET,
} from '../Actions/index'

const initialState = { 
    searchDog: [],       
    allDogs: [],         
    detailDogById: [],   
    newDog: null,        
    getTemperaments: [], 
}


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_DOG:
            return { ...state, searchDog: action.payload, allDogs: action.payload }
            
        case DOG_DETAIL_BY_ID_CARD:
            return { ...state, detailDogById: action.payload }

        case ADD_NEW_DOG:
            return { ...state, newDog: action.payload }

        case GET_TEMPERAMENTS:
            return { ...state, getTemperaments: action.payload }
            
        case FILTER_BY_TEMPERAMENTS:
            const allDogs = state.allDogs
            const dogsFilter = action.payload === 'All' ? allDogs
            : allDogs.filter(obj => {
                let tempsDb = obj.temperaments 
                let tempsApi = obj.temperament
                if(tempsDb) {
                    for (let names of tempsDb) {
                        return names.name === action.payload
                    }
                }
                return tempsApi.includes(action.payload)
            })
            return { ...state, searchDog: dogsFilter}
        
        case FILTER_BY_CREATED:
            const createdFiltered = action.payload === 'DB' ? state.allDogs.filter(dog => dog.createdInDb)
            : state.allDogs.filter(dog => !dog.createdInDb)
            return { ...state, searchDog: action.payload === 'All' ? state.allDogs: createdFiltered }

        case AZ:      
            const allDogs2 = state.allDogs
            const orderAZ = action.payload === 'All' ? state.searchDog
            : allDogs2.sort((a, b) => {
              const dog1 = a.name;
              const dog2 = b.name;
              if(dog1 < dog2) return -1
              if(dog1 > dog2) return 1
               else {
                return 0
              }
            })      
            return { ...state, searchDog: action.payload === "All" ? allDogs2 : [...orderAZ] };
      
        case ZA:
            const allDogs4 = state.allDogs
            const orderZA = action.payload === 'All' ? state.searchDog 
            : allDogs4.sort((a, b) => {
              const dog1 = a.name;
              const dog2 = b.name;
              if(dog1 > dog2) return -1
              if(dog1 < dog2) return 1
               else {
                return 0
              }
            })      
            return { ...state, searchDog: [...orderZA] };
        
        case ASC:
            const allDogs3 = state.allDogs
            const orderASC = action.payload === 'All' ? state.searchDog 
            : allDogs3.sort(function (a, b) {
                let weightA = Number.parseInt([a.weight][0])
                let weightB = Number.parseInt([b.weight][0])
                if (!weightA && weightA !== 0) weightA = 250
                    if (!weightB && weightB !== 0) weightA = 250 
                    return weightA - weightB;
                })    
            return { ...state, searchDog: [...orderASC] };
            
            
        case DESC:
            const allDogs5 = state.allDogs
            const orderDESC = action.payload === 'All' ? state.searchDog 
            : allDogs5.sort(function (a, b) {
                let weightA = Number.parseInt([a.weight][0])
                let weightB = Number.parseInt([b.weight][0])
                if (!weightA && weightA !== 0) weightA = 250
                    if (!weightB && weightB !== 0) weightA = 250 
                    return weightB- weightA;
            })    
            return { ...state, searchDog: [...orderDESC] };
        
        case RESET:
            return { ...state, searchDog: [] }
        
        default: 
            return state;
    }
}


export default rootReducer;