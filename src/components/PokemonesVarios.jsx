import axios, { Axios } from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import reactlogo5 from "../assets/pikachu-wink-unscreen.gif/"
const PokemonesVarios = () => {

    const { id } = useParams();
    //const navigate = useNavigate()

    const [pokemonCards, setPokemonCards] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemonCards(res.data))
            .catch(() => alert("No existe"))
    }, [id])

    


    const colors2 = () => {
        if (pokemonCards.types?.[0].type.name === "rock") {
            return "saddlebrown"
        } else if (pokemonCards.types?.[0].type.name === "fighting") {
            return "DarkOrange"
        } else if (pokemonCards.types?.[0].type.name === "normal") {
            return "LightCyan"
        } else if (pokemonCards.types?.[0].type.name === "grass") {
            return "LimeGreen"
        } else if (pokemonCards.types?.[0].type.name === "poison") {
            return "MediumSlateBlue"
        } else if (pokemonCards.types?.[0].type.name === "bug") {
            return "#a0fb0e"
        } else if (pokemonCards.types?.[0].type.name === "fire") {
            return "DarkOrange"
        } else if (pokemonCards.types?.[0].type.name === "water") {
            return "DeepSkyBlue"
        } else if (pokemonCards.types?.[0].type.name === "electric") {
            return "yellow"
        } else if (pokemonCards.types?.[0].type.name === "ground") {
            return "Gold"
        } else if (pokemonCards.types?.[0].type.name === "steel") {
            return "LightGray"
        } else if (pokemonCards.types?.[0].type.name === "ice") {
            return "LightCyan"
        } else if (pokemonCards.types?.[0].type.name === "ghost") {
            return "Navy"
        } else if (pokemonCards.types?.[0].type.name === "dark") {
            return "MidnightBlue"
        } else if (pokemonCards.types?.[0].type.name === "psychic") {
            return "#6f7357"
        } else if (pokemonCards.types?.[0].type.name === "dragon") {
            return "Azure"
        } else {
            return "pink"
        }
    }

    const porcentajes = (index) => {
        const width = pokemonCards.stats?.[index]?.base_stat
        return `${width}%`
    }

    const LetterCamelCase = (str) => {
        return str?.charAt(0).toUpperCase() + str?.slice(1)
    }


    return (
        <div className='Pokedex'>

            <div className='TituloPoke' style={{ backgroundColor: colors2() }}>
                <div>
                    <Link to={"/poke"}> <i className='bx bxs-left-arrow bx-md'></i> </Link>
                </div>
                <div>
                    <h2>Pokédex</h2>
                </div>
            </div>

            <h1 className='titulo-poke'> {LetterCamelCase(pokemonCards?.name)} </h1>
            <div className='Pokex-Contenedor'>

                <div className='Stas1'>
                    <div className='Contenido'>
                        <section className='section'>
                            <h3> ID </h3>
                            <p> {id} </p>

                        </section>
                        <section className='section'>
                            <h3> Height </h3>
                            <p>{pokemonCards.height} </p>
                        </section>
                        <section className='section'>
                            <h3> Weight </h3>
                            <p>{pokemonCards.weight} </p>
                        </section>
                        <section className='section'>
                            <h3> Abilities </h3>
                            <p className='Borde' style={{ backgroundColor: colors2() }}> {pokemonCards.abilities?.[0].ability.name} </p>
                        </section>
                        <section className='section'>
                            <h3>Types</h3>
                            <p className='Borde' style={{ backgroundColor: colors2() }}> {pokemonCards.types?.[0].type.name} </p>
                        </section>
                    </div>
                </div>
                <div className='Stas2' >
                    <img src={pokemonCards?.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div className='Stas3'>
                    <div className='Superior'>
                        <h2>Base</h2>
                        <h2>Min</h2>
                        <h2>Max</h2>

                    </div>
                    <div className='Porcentajes'>
                        <section className='Porcentaje-General'>
                            <h3> {pokemonCards.stats?.[0].stat.name}  </h3>
                            <div className='CardsPoke' style={{ width: porcentajes(0), backgroundColor: colors2() }}>
                                <span > {pokemonCards.stats?.[0].base_stat}%   </span>
                            </div>
                        </section>
                        <section className='Porcentaje-General'>
                            <h3> {pokemonCards.stats?.[1].stat.name} </h3>
                            <div className='CardsPoke' style={{ width: porcentajes(1), backgroundColor: colors2() }} >
                                <span> {pokemonCards.stats?.[1].base_stat}% </span>
                            </div>
                        </section>
                        <section className='Porcentaje-General'>
                            <h3> {pokemonCards.stats?.[2].stat.name} </h3>
                            <div className='CardsPoke' style={{ width: porcentajes(2), backgroundColor: colors2() }} >
                                <span> {pokemonCards.stats?.[2].base_stat}% </span>
                            </div>
                        </section>
                        <section className='Porcentaje-General' >
                            <h3> {pokemonCards.stats?.[3].stat.name}  </h3>
                            <div className='CardsPoke' style={{ width: porcentajes(3), backgroundColor: colors2() }} >
                                <span> {pokemonCards.stats?.[3].base_stat}% </span>
                            </div>
                        </section>
                        <section className='Porcentaje-General' >
                            <h3> {pokemonCards.stats?.[4].stat.name}  </h3>
                            <div className='CardsPoke' style={{ width: porcentajes(4), backgroundColor: colors2() }} >
                                <span> {pokemonCards.stats?.[4].base_stat}% </span>
                            </div>
                        </section>
                        <section className='Porcentaje-General' >
                            <h4> {pokemonCards.stats?.[5].stat.name}  </h4>
                            <div className='CardsPoke' style={{ width: porcentajes(5), backgroundColor: colors2() }} >
                                <span> {pokemonCards.stats?.[5].base_stat}% </span>
                            </div>
                        </section>
                    </div>
                </div>


            </div>
            <footer className='Contenido-Final'>
                <div className='Movimientos'>
                    <h3>Movements</h3>
                </div>
                <div className='PokeMovimientos' style={{ backgroundColor: colors2() }} >
                    <div className='Columnas'>
                        <p> {pokemonCards.moves?.[0]?.move.name} </p>
                        <p> {pokemonCards.moves?.[1]?.move.name} </p>
                        <p> {pokemonCards.moves?.[2]?.move.name} </p>
                        <p> {pokemonCards.moves?.[3]?.move.name} </p>
                        <p> {pokemonCards.moves?.[4]?.move.name} </p>
                        <p> {pokemonCards.moves?.[5]?.move.name} </p>
                        <p> {pokemonCards.moves?.[6]?.move.name} </p>
                        <p> {pokemonCards.moves?.[7]?.move.name} </p>
                        <p> {pokemonCards.moves?.[8]?.move.name} </p>
                        <p> {pokemonCards.moves?.[9]?.move.name} </p>
                        <p> {pokemonCards.moves?.[10]?.move.name} </p>
                        <p> {pokemonCards.moves?.[11]?.move.name} </p>
                        <p> {pokemonCards.moves?.[12]?.move.name} </p>
                        <p> {pokemonCards.moves?.[13]?.move.name} </p>
                        <p> {pokemonCards.moves?.[14]?.move.name} </p>
                        <p> {pokemonCards.moves?.[15]?.move.name} </p>
                        <p> {pokemonCards.moves?.[16]?.move.name} </p>
                        <p> {pokemonCards.moves?.[17]?.move.name} </p>
                        <p> {pokemonCards.moves?.[18]?.move.name} </p>
                        <p> {pokemonCards.moves?.[19]?.move.name} </p>

                    </div>
                    <div className='Columnas'>
                        <p> {pokemonCards.moves?.[20]?.move.name} </p>
                        <p> {pokemonCards.moves?.[21]?.move.name} </p>
                        <p> {pokemonCards.moves?.[22]?.move.name} </p>
                        <p> {pokemonCards.moves?.[23]?.move.name} </p>
                        <p> {pokemonCards.moves?.[24]?.move.name} </p>
                        <p> {pokemonCards.moves?.[25]?.move.name} </p>
                        <p> {pokemonCards.moves?.[26]?.move.name} </p>
                        <p> {pokemonCards.moves?.[27]?.move.name} </p>
                        <p> {pokemonCards.moves?.[28]?.move.name} </p>
                        <p> {pokemonCards.moves?.[29]?.move.name} </p>
                        <p> {pokemonCards.moves?.[30]?.move.name} </p>
                        <p> {pokemonCards.moves?.[31]?.move.name} </p>
                        <p> {pokemonCards.moves?.[32]?.move.name} </p>
                        <p> {pokemonCards.moves?.[33]?.move.name} </p>
                        <p> {pokemonCards.moves?.[34]?.move.name} </p>
                        <p> {pokemonCards.moves?.[35]?.move.name} </p>
                        <p> {pokemonCards.moves?.[36]?.move.name} </p>
                        <p> {pokemonCards.moves?.[37]?.move.name} </p>
                        <p> {pokemonCards.moves?.[38]?.move.name} </p>
                        <p> {pokemonCards.moves?.[39]?.move.name} </p>
                    </div>
                    <div className='Columnas'>
                        <p> {pokemonCards.moves?.[40]?.move.name} </p>
                        <p> {pokemonCards.moves?.[41]?.move.name} </p>
                        <p> {pokemonCards.moves?.[42]?.move.name} </p>
                        <p> {pokemonCards.moves?.[43]?.move.name} </p>
                        <p> {pokemonCards.moves?.[44]?.move.name} </p>
                        <p> {pokemonCards.moves?.[45]?.move.name} </p>
                        <p> {pokemonCards.moves?.[46]?.move.name} </p>
                        <p> {pokemonCards.moves?.[47]?.move.name} </p>
                        <p> {pokemonCards.moves?.[48]?.move.name} </p>
                        <p> {pokemonCards.moves?.[49]?.move.name} </p>
                        <p> {pokemonCards.moves?.[50]?.move.name} </p>
                        <p> {pokemonCards.moves?.[51]?.move.name} </p>
                        <p> {pokemonCards.moves?.[52]?.move.name} </p>
                        <p> {pokemonCards.moves?.[53]?.move.name} </p>
                        <p> {pokemonCards.moves?.[54]?.move.name} </p>
                        <p> {pokemonCards.moves?.[55]?.move.name} </p>
                        <p> {pokemonCards.moves?.[56]?.move.name} </p>
                        <p> {pokemonCards.moves?.[57]?.move.name} </p>
                        <p> {pokemonCards.moves?.[58]?.move.name} </p>
                        <p> {pokemonCards.moves?.[59]?.move.name} </p>
                    </div>
                    <div className='Columnas'>
                        <p> {pokemonCards.moves?.[60]?.move.name} </p>
                        <p> {pokemonCards.moves?.[61]?.move.name} </p>
                        <p> {pokemonCards.moves?.[62]?.move.name} </p>
                        <p> {pokemonCards.moves?.[63]?.move.name} </p>
                        <p> {pokemonCards.moves?.[64]?.move.name} </p>
                        <p> {pokemonCards.moves?.[65]?.move.name} </p>
                        <p> {pokemonCards.moves?.[66]?.move.name} </p>
                        <p> {pokemonCards.moves?.[67]?.move.name} </p>
                        <p> {pokemonCards.moves?.[68]?.move.name} </p>
                        <p> {pokemonCards.moves?.[69]?.move.name} </p>
                        <p> {pokemonCards.moves?.[70]?.move.name} </p>
                        <p> {pokemonCards.moves?.[71]?.move.name} </p>
                        <p> {pokemonCards.moves?.[72]?.move.name} </p>
                        <p> {pokemonCards.moves?.[73]?.move.name} </p>
                        <p> {pokemonCards.moves?.[74]?.move.name} </p>
                        <p> {pokemonCards.moves?.[75]?.move.name} </p>
                        <p> {pokemonCards.moves?.[76]?.move.name} </p>
                        <p> {pokemonCards.moves?.[77]?.move.name} </p>
                        <p> {pokemonCards.moves?.[78]?.move.name} </p>
                        <p> {pokemonCards.moves?.[79]?.move.name} </p>
                    </div>
                </div>
                <div className='CopRight'>
                    <div>
                        <img className='Pikachu' src={reactlogo5} alt="" />
                    </div>

                    <p > <i className='bx bx-copyright'></i> Created by Gerson Flores Narciso</p>
                    <p> Social media  </p>
                    <a href="https://www.linkedin.com/in/gerson-flores-narciso-52628b256/"><i className='bx bxl-linkedin-square bx-md' ></i></a>
                </div>

            </footer>


        </div>
    );
};

export default PokemonesVarios;