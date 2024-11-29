import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    usuario: {},
  },
  reducers: {
    setUsuario: (state, action) => {
        state.usuario = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsuario } = mainSlice.actions

export default mainSlice.reducer