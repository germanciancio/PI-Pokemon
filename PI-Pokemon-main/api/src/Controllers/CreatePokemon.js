const { json } = require("sequelize");
const { Pokemon } = require("../db");

const newPokemon = async (req, res) => {
  try {
    const { id, name, imagen, hp, attack, defense, speed, weight, height } =
      req.body;
    const weightString = weight + "kg";
    const heightString = height + "cm";

    const pokemon = await Pokemon.create({
      id,
      name,
      imagen,
      hp,
      attack,
      defense,
      speed,
      weight: weightString,
      height: heightString,
    });
    res.json(pokemon);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
 module.exports = {newPokemon}