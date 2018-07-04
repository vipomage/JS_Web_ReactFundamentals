import React, { Component } from 'react';

let PokemonField = props => {
	
	return (
		<div className={'col border border-warning m-1 p-2 text-center'}>
			<h1>{props.data.pokemonName}</h1>
			<p>{props.data.pokemonInfo}</p>
			<img
				style={{ width: '100px',margin:'0 auto'}}
				alt="pokemon"
				src={props.data.pokemonImg}
			/>
		</div>
	);
};

export default PokemonField;
