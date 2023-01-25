import { configureStore } from '@reduxjs/toolkit'
import  PokemonSlice  from './slice/Pokemon.slice'

export default configureStore({
  reducer: {
          Pokemon:PokemonSlice

	}
})