import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { data } from "../../constants";
import "./ListCards.css";

const ListCards = () => {
  return (
    <section>
      <div className="app__listCards">
        {data.generations.map((name) => (
          <>
            <h1 className="app__ListCards-NumberGeneration">
              {name.generetion} Generation
            </h1>
            <div className="app__listCards-cards">
              <PokeCard paramAdress={name.grass} />
              <PokeCard paramAdress={name.fire} />
              <PokeCard paramAdress={name.water} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ListCards;
