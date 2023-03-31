const { Pokemon } = require("../db");
const axios = require("axios");

const detailPokemons = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeApi = response.data;
    res.status(200).json(pokeApi);
  } catch (error) {
    const { id } = req.params;
    const pokeBd = await Pokemon.findAll({
      where: {
        id: id,
      },
    });
    if(pokeBd) res.status(200)
    res.status(400).json({ error: error.message });
  }
};

module.exports = { detailPokemons };
