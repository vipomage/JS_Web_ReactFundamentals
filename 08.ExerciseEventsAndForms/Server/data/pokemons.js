const pokemons = [];

module.exports = {
	addPokem: data => {
		pokemons.push(data);
	},
	retrivePokemons: () => {
		//console.log('hello from database');
		//its not in refresh loop don't worry
		return pokemons;
	}
};
