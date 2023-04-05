import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemon } from "../../Redux/Actions";

const Home = () => {
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);
  return (
    <div>
      {pokemons.map((poke) => {
        return (
          <Card
            id={poke.id}
            name={poke.name}
            imagen={poke.imagen} //image: infoPush.data.sprites.other.dream_world.front_default,
          />
        );
      })}
    </div>
  );
};

export default Home;
