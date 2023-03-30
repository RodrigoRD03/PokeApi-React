import React from "react";
import { AbsorbApi } from "../../functions";

const PokedexScreen = ({paramAdress}) => {
  let address = "pokemon/" + paramAdress;
  const [pokemon, loading, error] = AbsorbApi(address);
  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  return (
    <>
      {pokemon && (
        <section>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          <h1>{pokemon.id}</h1>
          <h2>{pokemon.name}</h2>
        </section>
      )}
    </>
  );
};

export default PokedexScreen;
