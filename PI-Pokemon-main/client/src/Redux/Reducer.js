import { ADD_POKEMON, GET_ALLPOKEMON, FILTERPOKE, ORDER } from "./ActionsType" 
 
const initialState ={
    pokemons:[]
}
const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case ADD_POKEMON: 
        return{ 
            ...state,
            pokemons:[...state.pokemons,payload]    
        }
        case GET_ALLPOKEMON:
            return{
                ...state,
                pokemons:payload
            }
        case FILTERPOKE:
            const filtered = state.pokemons.filter((pokemon)=>pokemon.type === payload)
            return{
                ...state, 
                pokemons: filtered
            } 
        case ORDER:
            return{
                ...state,
                pokemons:
                payload === "Ascendente"
                ? state.pokemons.sort((a,b)=>a-b)
                : state.pokemons.sort((a,b)=>b-a)
            }    
        default: 
        return {
            ...state
        }
    }
}

export default reducer