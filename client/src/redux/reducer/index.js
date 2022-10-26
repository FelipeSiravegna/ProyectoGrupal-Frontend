import { GET_COUNTRIES, } from "../actions"


const initialState = {
    countries : [],
    activities : [],
    countryDetail: {},
    sortCountries: [],
    continents: [],
    filterContinents: []
}

export default function reducer (state = initialState, {type, payload}){
    switch (type){
        case GET_COUNTRIES:            
            let conti = []                                            
            payload.forEach ((c) => {                
                if (!conti.includes(c.continent)){
                    conti.push(c.continent) 
                }
            })                         
                                            

        default : return state
    }
}