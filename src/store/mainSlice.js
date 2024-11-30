import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    usuario: {},
    pizzas: []
  },
  reducers: {
    setUsuario: (state, action) => {
        state.usuario = action.payload;
    },
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
  }
  },
})

// Action creators are generated for each case reducer function
export const { setUsuario, setPizzas } = mainSlice.actions

export default mainSlice.reducer