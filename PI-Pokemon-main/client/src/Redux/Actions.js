import { ADD_POKEMON, GET_ALLPOKEMON, FILTERPOKE, ORDER } from "./ActionsType";
import axios from "axios";

export const addPokemon = (pokemon) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/pokemons", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon),
      });
      dispatch({type:ADD_POKEMON, payload:pokemon})
    } catch (error) {
        alert("No se puede crear tu Pokemon!!!")
    }
  };
};
export const getAllPokemon = () => {
    return async function (dispatch){
        try {
            const response = await axios("http://localhost:3001/pokemons")
            dispatch({type:GET_ALLPOKEMON, payload: response.data})
        } catch (error) {
            alert("No encontre tus pokemons!!!")
        }
    }
};
export const filterPoke = (tipo) => {
    return{
        type: FILTERPOKE,
        payload: tipo
    }
};
export const order = (option) => {
    return{
        type: ORDER,
        payload: option
    }
};
