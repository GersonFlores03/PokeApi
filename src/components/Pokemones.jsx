import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import reactlogo3 from "../assets/portadaCompleta.jpg/"
import reactlogo4 from "../assets/Portada.jpg/"


const Pokemones = () => {
    const navigate = useNavigate();

    const pokemon = useSelector(state => state.Pokemon)
    const [caracterPoke, setCaracterPoke] = useState([])
    const [inputValue , setInputValue ] = useState("")
    const [location , setLocation] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(res => setCaracterPoke(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res => setLocation(res.data.results))
    }, [])

    
   
   

    const seacrh = () => {
          navigate(`/poke/${inputValue.toLowerCase()}`)
    }

    

    const filterPokemon = e =>{
             axios.get(e.target.value)
             .then(res => setCaracterPoke(res.data.pokemon))
    }

        const [page , setPage] = useState(1)
        const paginedIncrement = 24
        const lastIndex = page * paginedIncrement
        const firstIndex = lastIndex - paginedIncrement
        const paginadoPokemon = caracterPoke.slice(firstIndex , lastIndex)
        const totalPage = Math.ceil(caracterPoke.length/paginedIncrement)

        const pages = []
        for(let i = 1; i <= totalPage; i++){
             pages.push(i)
        }

    return (
        <div className='Contendor-Superior'>
            <div>  
            <img className='Portada' src={reactlogo3} alt="" />
            <img className='Portada2' src={reactlogo4} alt="" />
            </div>
            <div className='Input-filter'>  
            <h3 className='Separar'>  <span className='Edit'> Welcome {pokemon}  </span>  , here you will find your favorite pokemon </h3>
            <input className='Separar' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={seacrh}>Seek</button>
            <div className='Filter'>
                <select onChange={filterPokemon} name="" id="">
                     {
                       location.map(loca => (
                          <option value={loca.url} key={loca.url}>
                             {loca.name}
                          </option>
                       ))
                     }


                </select>
                
            </div>
            </div>
              
            <div>
            <div className='Page-movimiento'>
                <button onClick={()=>setPage(page -1)} disabled={page ===1} ><i className='bx bx-chevrons-left bx-md'></i></button>
                <h4 className='total'>{page} / {totalPage}</h4>
                
                <button onClick={()=>setPage(page +1)}><i className='bx bx-chevrons-right bx-md'></i></button>
            </div> 
            <div className='Pokemon-Card'>
                {
                    paginadoPokemon.map(caracter => (
                        <PokemonCard  
                        url ={caracter.url ? caracter.url : caracter.pokemon.url} 
                        key={caracter.url ? caracter.url : caracter.pokemon.url}  />
                    ))
                }
            </div>
            <div className='Page'>
                  {
                    pages.map(number => (
                       
                        <button key={number.page}  onClick={()=>setPage(number)}>{number}</button>
                        
                    ))
                  }
               </div>
            </div>

        </div>
    );
};

export default Pokemones;