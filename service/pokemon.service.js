const axios = require('axios')
class PokemonService {
    async getPokemon(offset, limit) {
        return await axios.get('https://pokeapi.co/api/v2/ability', {
            headers: { "Accept-Encoding": "gzip,deflate,compress" },
            params: {
                limit: limit,
                offset: offset,
            }
        })
    }
}

module.exports = PokemonService;
