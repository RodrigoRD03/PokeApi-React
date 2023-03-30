import React from "react";
import { PokedexScreen } from "./components";

const App = () => {
  return (
    <>
      <PokedexScreen paramAdress="" />
      <PokedexScreen paramAdress="lucario" />
      <PokedexScreen paramAdress="" />
    </>
  );
};

export default App;
