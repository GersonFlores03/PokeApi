import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokemones from './components/Pokemones'
import PokemonesVarios from './components/PokemonesVarios'
import ProtectedRoutes from './components/ProductProtect'


function App() {
 
  

  return (
    <div className="App">
      <HashRouter>
             
           <Routes>
              <Route path='/' element={<Home/>}  />
              <Route element={<ProtectedRoutes/>} >
              <Route path='/poke' element={<Pokemones/>} />
              <Route path='/poke/:id' element={<PokemonesVarios/>} /> 
              </Route>
           </Routes>
       </HashRouter>
     
    </div>
  )
}

export default App
