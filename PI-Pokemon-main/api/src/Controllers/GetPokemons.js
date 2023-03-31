const { Pokemon } = require("../db");
const axios = require("axios");

const getPokemons = async (req, res) => {
  try {
    const response = await axios("https://pokeapi.co/api/v2/pokemon");
    const pokeApi = response.data.results;
    const dbPoke = await Pokemon.findAll();
    const apiDbPoke = pokeApi.concat(dbPoke);
    const { name } = req.query;
    if (name) {
      const pokeFilter = apiDbPoke.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
      res.status(200).json(pokeFilter);
    } else {
      res.status(200).json(apiDbPoke);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPokemons };
