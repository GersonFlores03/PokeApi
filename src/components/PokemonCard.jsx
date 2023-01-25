import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PokemonCard = ({ url }) => {

  const [cardPokemon, setCardPokemon] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(url)
      .then(res => setCardPokemon(res.data))
  }, [])

  //console.log(cardPokemon)

  const colors = () => {
    if (cardPokemon.types?.[0].type.name === "rock") {
      return "saddlebrown"
    } else if (cardPokemon.types?.[0].type.name === "fighting") {
      return "DarkOrange"
    } else if (cardPokemon.types?.[0].type.name === "normal") {
      return "#75c7ff"
    } else if (cardPokemon.types?.[0].type.name === "grass") {
      return "LimeGreen"
    } else if (cardPokemon.types?.[0].type.name === "poison") {
      return "MediumSlateBlue"
    } else if (cardPokemon.types?.[0].type.name === "bug") {
      return "#a0fb0e"
    } else if (cardPokemon.types?.[0].type.name === "fire") {
      return "DarkOrange"
    } else if (cardPokemon.types?.[0].type.name === "water") {
      return "DeepSkyBlue"
    } else if (cardPokemon.types?.[0].type.name === "electric") {
      return "yellow"
    } else if (cardPokemon.types?.[0].type.name === "ground") {
      return "Gold"
    } else if (cardPokemon.types?.[0].type.name === "steel") {
      return "#525558"
    } else if (cardPokemon.types?.[0].type.name === "ice") {
      return "LightCyan"
    } else if (cardPokemon.types?.[0].type.name === "ghost") {
      return "Navy"
    } else if (cardPokemon.types?.[0].type.name === "dark") {
      return "MidnightBlue"
    } else if (cardPokemon.types?.[0].type.name === "psychic") {
      return "#6f7357"
    } else if (cardPokemon.types?.[0].type.name === "dragon") {
      return "Azure"
    } else {
      return "pink"
    }

  }

  const titlecolors = () => {
    if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "grass") {
      return "green"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "rock") {
      return "saddlebrown"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "fighting") {
      return "DarkOrange"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "normal") {
      return "#75c7ff"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "poison") {
      return "MediumSlateBlue"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "bug") {
      return "#a0fb0e"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "fire") {
      return "DarkOrange"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "water") {
      return "DeepSkyBlue"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "electric") {
      return "yellow"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "ground") {
      return "Gold"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "steel") {
      return "#525558"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "ice") {
      return "LightCyan"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "ghost") {
      return "Navy"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "dark") {
      return "MidnightBlue"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "psychic") {
      return "#6f7357"
    } else if (ConvertLetter(cardPokemon.name) && cardPokemon.types?.[0].type.name === "dragon") {
      return "Azure"
    } else {
      return "pink"
    }
  }

  const ConvertLetter = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1)
  }


  return (
    <div className='CardPokemon'>
      <div className='General' onClick={() => navigate(`/poke/${cardPokemon.id}   `)} >
        <div className='Nombre-imagen' style={{ backgroundColor: colors() }}>
          <img className='Imagen-Poke' src={cardPokemon.sprites?.other.dream_world.front_default} alt="" />
          <div className='Caracteristicas'>
            <div className='Texto' >
              <h3 style={{ color: titlecolors() }}> {ConvertLetter(cardPokemon.name)} </h3>
              <p  > {ConvertLetter(cardPokemon.types?.[0].type.name)} </p>
              <span className='Margen'>Type</span>
              <div className='Types'>
                <section>
                  <p> {ConvertLetter(cardPokemon.stats?.[0].stat.name)}</p>
                  <h3 > {cardPokemon.stats?.[0].base_stat}  </h3>
                </section>
                <section>
                  <p> {ConvertLetter(cardPokemon.stats?.[1].stat.name)}</p>
                  <h3> {cardPokemon.stats?.[1].base_stat}  </h3>
                </section>
                <section>
                  <p> {ConvertLetter(cardPokemon.stats?.[2].stat.name)}</p>
                  <h3> {cardPokemon.stats?.[2].base_stat}  </h3>
                </section>
              </div>
              <div className='Types2'>
                <section>

                  <p> {ConvertLetter(cardPokemon.stats?.[3].stat.name)}</p>
                  <h3> {cardPokemon.stats?.[3].base_stat}  </h3>
                </section>
                <section>
                  <p> {ConvertLetter(cardPokemon.stats?.[4].stat.name)}</p>
                  <h3> {cardPokemon.stats?.[4].base_stat}  </h3>
                </section>
                <section>
                  <p> {ConvertLetter(cardPokemon.stats?.[5].stat.name)}</p>
                  <h3> {cardPokemon.stats?.[5].base_stat}  </h3>
                </section>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;