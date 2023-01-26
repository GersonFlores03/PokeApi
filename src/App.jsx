import { useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokemones from './components/Pokemones'
import PokemonesVarios from './components/PokemonesVarios'
import ProtectedRoutes from './components/ProductProtect'


function App() {

  const [switchMode, setSwitchMode] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const switchOn = () => {
    setSwitchMode(!switchMode);
    setDarkmode(!darkmode);
  };
  let classDark = "";
  if (switchMode == true) {
    classDark = "active";
  }

  return (

    <div className={`theme-btn ${darkmode ? "darkmode" : "ligthmode"} `} >


      <HashRouter>
       <button
          onClick={switchOn}
          className={`switch ${classDark}`}
          id="swith">
          <span>
            <i className="bx bx-sun bx-sm"></i>
          </span>
          <span>
            <i className="bx bx-moon bx-sm"></i>
          </span>
        </button>
        <div className='container-swicht'>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/poke' element={<Pokemones />} />
            <Route path='/poke/:id' element={<PokemonesVarios />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App





