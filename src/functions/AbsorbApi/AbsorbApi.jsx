import React, {useState, useEffect} from "react";

const  AbsorbApi = (paramAddress) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const RandomId = Math.floor(Math.random() * 499 + 1);
  const [pokemonID, setPokemonId] = useState(RandomId);
  let address;
  if (paramAddress == "pokemon/"){
    address = "pokemon/" + pokemonID;
  } else {
    address = paramAddress;
  }
  const fetchData = async () => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/${address}`);
        const data = await res.json();
        setPokemon(data);
        setLoading(false);
        setError(false);
    }catch(ex){
        setLoading(false);
        setError(true);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  return [pokemon, loading, error];
};

export default AbsorbApi;
