import React from "react";
import { AbsorbApi, Colors } from "../../functions";
import { PrintTypes, PrintStats } from "../../container";
import { images } from "../../constants";
import "./PokeCard.css";

const PokeCard = ({ paramAdress }) => {
  let address = "pokemon/" + paramAdress;
  const [pokemon, loading, error] = AbsorbApi(address);
  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  if (pokemon) {
    const typeOfPokemon = pokemon.types[0].type.name;
    var [colorLight, colorHigh] = Colors(typeOfPokemon);
  }
  return (
    <>
      {pokemon && (
        <div className="app__card">
          <div
            className="app__card-background"
            style={{
              background: `linear-gradient(45deg,${colorLight} 0%, ${colorHigh} 100%)`,
            }}
          />
          <div className="app__card-imagePokemon">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={`pokemon ${pokemon.name}`}
            />
          </div>
          <div className="app__card-informationPokemon">
            <div className="app__card-informationPokemon_name">
              <h1>{pokemon.name}</h1>
              <h3>N° {pokemon.id}</h3>
            </div>
            <div className="app__card-informationPokemon_types">
              {pokemon.types.map((types) => (
                <PrintTypes type={types.type.name} />
              ))}
            </div>
            <div className="line-vertical line" />
            <div className="app__card-informationPokemon_Stats">
              {pokemon.stats.map((stat) => (
                <PrintStats stat={stat} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeCard;
