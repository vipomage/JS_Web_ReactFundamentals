import React, { Component } from 'react';

let PokemonField = props => {
	
	return (
		<div className={'col border m-1 p-2'}>
			<h1>{props.data.pokemonName}</h1>
			<p>{props.data.pokemonInfo}</p>
			<img
				style={{ width: '100px' }}
				alt="pokemon"
				src={props.data.pokemonImg}
			/>
		</div>
	);
};

export default PokemonField;
