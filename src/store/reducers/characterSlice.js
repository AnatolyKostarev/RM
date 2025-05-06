import { createSlice } from '@reduxjs/toolkit'

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characters: [],
    character: {}
  },
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    }
  }
})

export const { setCharacters } = characterSlice.actions
export default characterSlice.reducer
