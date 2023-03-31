const { Type } = require("../db");
const axios = require("axios");

const typePokemon = async () => {
  try {
    const type = [];
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const typePoke = response.data.results.map((type) => type.name);
    for (let i = 0; i < typePoke.length; i++) {
      if (!type.includes(typePoke[i])) {
        type.push(typePoke[i]);
      }
    }
    await Type.bulkCreate(
      type.map((p) => {
        return {
          name: p,
        };
      }),
     { ignoreDuplicates: true }
    );
     await Type.findAll();

  } catch (error) {
     return (error.message );
  }
};

module.exports = { typePokemon };
