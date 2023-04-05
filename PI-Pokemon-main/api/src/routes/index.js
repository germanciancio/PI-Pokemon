const { Router } = require('express');
const { newPokemon } = require('../Controllers/CreatePokemon');
const { detailPokemons } = require('../Controllers/DetailPokemon');
const {getPokemons} = require ("../Controllers/GetPokemons");
//const { router } = require('../app');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
router.get("/pokemons", getPokemons)
router.post("/pokemons", newPokemon )
router.get("/pokemons/:id", detailPokemons )




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
