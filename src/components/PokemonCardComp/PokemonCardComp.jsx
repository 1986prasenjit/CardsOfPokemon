import React from "react";
import './PokemonCardComp.css';

function PokemonCardComp({ pokemonData }) {
  //console.log(pokemonData.sprites.other.dream_world.front_default);
  return (
    <>
        <div className="cards">
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="cardsImg"
          />
          <h1 className="cardsH1">{pokemonData.name}</h1>
        </div>
    </>
  );
}

export default PokemonCardComp;
