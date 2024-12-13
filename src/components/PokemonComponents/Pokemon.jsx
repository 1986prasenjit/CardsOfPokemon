import React, { useEffect, useState } from "react";
import PokemonCardComp from "../PokemonCardComp/PokemonCardComp";
import "./Pokemon.css";

function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const getPokemonData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      const detailsPokemonData = data.results.map(async (curPoke) => {
        const res = await fetch(curPoke.url);
        const detailsResult = await res.json();
        return detailsResult;
      });
      const finalPokemonData = await Promise.all(detailsPokemonData);
      setPokemonData(finalPokemonData);
    } catch (error) {
      console.warn(`Something went wrong`);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  const searchPokemonData = pokemonData.filter((currPoke)=>(
    currPoke.name.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <>
      <section className="mainCardsDiv">
        <h1 className="pokemonListH1">Pokemon Lists</h1>
        <div>
          <input 
            type="text" 
            className="searchPokemon" 
            placeholder="Search Here"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
        <section className="cardsContainer">
          {searchPokemonData &&
            searchPokemonData.map((pokemon) => {
              return <PokemonCardComp key={pokemon.id} pokemonData={pokemon} />;
            })}
        </section>
      </section>
    </>
  );
}

export default Pokemon;
