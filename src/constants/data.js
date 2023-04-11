import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { RiSwordFill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { GiPunchBlast, GiBorderedShield } from "react-icons/gi";
import { BsSpeedometer } from "react-icons/bs";

const generations = [
  {
    generetion: "First",
    fire: "charmander",
    water: "squirtle",
    grass: "bulbasaur",
  },
  {
    generetion: "Second",
    fire: "cyndaquil",
    water: "totodile",
    grass: "chikorita",
  },
  {
    generetion: "Third",
    fire: "torchic",
    water: "mudkip",
    grass: "treecko",
  },
  {
    generetion: "Quarter",
    fire: "chimchar",
    water: "piplup",
    grass: "turtwig",
  },
  {
    generetion: "Fifth",
    fire: "tepig",
    water: "oshawott",
    grass: "snivy",
  },
  {
    generetion: "Sixth",
    fire: "fennekin",
    water: "froakie",
    grass: "chespin",
  },
  {
    generetion: "Seventh",
    fire: "litten",
    water: "popplio",
    grass: "rowlet",
  },
  {
    generetion: "Eighth",
    fire: "scorbunny",
    water: "sobble",
    grass: "grookey",
  },
];

const listLightColors = {
  normal: "hsla(228, 21%, 72%, 1)",
  fighting: "hsla(347, 93%, 56%, 1)",
  flying: "hsla(178, 40%, 84%, 1)",
  poison: "hsla(293, 63%, 77%, 1)",
  ground: "hsla(26, 84%, 75%, 1)",
  rock: "hsla(45, 38%, 74%, 1)",
  bug: "hsla(76, 79%, 63%, 1)",
  ghost: "hsla(245, 71%, 63%, 1)",
  steel: "hsla(0, 0%, 100%, 1)",
  fire: "hsla(44, 74%, 55%, 1)",
  water: "hsla(185, 51%, 55%, 1)",
  grass: "hsla(59, 86%, 68%, 1)",
  electric: "hsla(0, 0%, 99%, 1)",
  psychic: "hsla(16, 80%, 71%, 1)",
  ice: "hsla(169, 32%, 70%, 1)",
  dragon: "hsla(216, 49%, 62%, 1)",
  dark: "hsla(214, 4%, 64%, 1)",
  fairy: "hsla(306, 100%, 90%, 1)",
};

const listHighColors = {
  normal: "hsla(229, 21%, 37%, 1)",
  fighting: "hsla(317, 20%, 37%, 1)",
  flying: "hsla(192, 50%, 71%, 1)",
  poison: "hsla(290, 47%, 50%, 1)",
  ground: "hsla(23, 74%, 52%, 1)",
  rock: "hsla(22, 16%, 57%, 1)",
  bug: "hsla(91, 60%, 41%, 1)",
  ghost: "hsla(266, 64%, 39%, 1)",
  steel: "hsla(0, 0%, 41%, 1)",
  fire: "hsla(0, 100%, 58%, 1)",
  water: "hsla(174, 38%, 31%, 1)",
  grass: "hsla(134, 36%, 53%, 1)",
  electric: "hsla(44, 100%, 50%, 1)",
  psychic: "hsla(3, 79%, 56%, 1)",
  ice: "hsla(165, 51%, 48%, 1)",
  dragon: "hsla(222, 70%, 38%, 1)",
  dark: "hsla(220, 3%, 21%, 1)",
  fairy: "hsla(295, 85%, 63%, 1)",
};

const statIcons = {
  hp: <AiFillHeart />,
  attack: <RiSwordFill />,
  defense: <FaShieldAlt />,
  "special-attack": <GiPunchBlast />,
  "special-defense": <GiBorderedShield />,
  speed: <BsSpeedometer />,
};

export default { generations, listLightColors, listHighColors, statIcons };
