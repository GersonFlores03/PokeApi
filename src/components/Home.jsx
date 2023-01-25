import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePokemon } from '../store/slice/Pokemon.slice';
import reactLogo from '../assets/pokedex-kamalesh-unscreen (2).gif'
import reactlogo2 from "../assets/Pokemon.png/"
import reactlogo4 from "../assets/pokeEdit.png/"
import reactlogo5 from "../assets/pikachu-wink-unscreen.gif/"




const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ispokemon, setIspokemon] = useState("");






    const ClickSubmit = () => {
        dispatch(changePokemon(ispokemon))
        navigate('/poke')
    }












    return (
        <div className='Contenedor-General' id='Contenedor-General'>

            <div>
                <img className='Poke-api' src={reactlogo4} alt="" />
                <div className='Titulo-General'>
                    <h1>¡Enter your <span> name!</span></h1>

                </div>

            </div>
            <div className='Input-Buton'>
                <input className='Input' type="text" value={ispokemon} onChange={e => setIspokemon(e.target.value)} placeholder={"Your Name..."} />
                <button className='Boton' onClick={ClickSubmit}><i className='bx bx-user-check bx-md'></i></button>
            </div>
            <div className='images'>
                <div className='Pokemon-Description'>
                    <h2> Choose your favorite pokemon </h2>
                </div>
                <img className='Gif' src={reactLogo} alt="" />
                <img className='Gif-mobile' src={reactlogo2} alt="" />

            </div>

            <footer className='Footer'>

                <div className='Contenedor-Footer'>
                    <div>
                        <img className='Pikachu' src={reactlogo5} alt="" />
                    </div>
                    <div className='CopRight'>
                        <p > <i className='bx bx-copyright'></i> Created by Gerson Flores Narciso</p>
                        <p> Social media  </p>
                        <a href="https://www.linkedin.com/in/gerson-flores-narciso-52628b256/"><i className='bx bxl-linkedin-square bx-md' ></i></a>
                    </div>
                </div>
            </footer>




        </div>
    );
};

export default Home;