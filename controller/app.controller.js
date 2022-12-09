const PokemonService = require('../service/pokemon.service');
class AppController {
    constructor() {
        this.limit = 10;
        this.offset = 0;
        this.pokemonService = new PokemonService()
    }

    async getDefaultPokemon(req, res) {

        if (req.query.page) {
            let pageCurrent = req.query.page;
            this.offset = this.limit * (pageCurrent - 1)
        }

        let data = await this.pokemonService.getPokemon(this.offset, this.limit);
        let totalPokemon = data.data.count;
        let totalPage = Math.ceil(totalPokemon / this.limit);

        res.render('index', {pokemons: data.data.results,
                            totalPage: totalPage});
    }


}

module.exports = AppController
