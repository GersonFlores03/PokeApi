import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const PokemonSlice = createSlice({
		name: 'Pokemon',
    initialState: "",
    reducers: {
             changePokemon: (state , action)=>{
                const ispokemon = action.payload
                return ispokemon
             }

        
    }
})

export const {  changePokemon  } = PokemonSlice.actions;

export default PokemonSlice.reducer;