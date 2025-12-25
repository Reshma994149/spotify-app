import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",

  initialState: {
    currentSong: null,
    isPlaying: false,
    favorites: []
  },

  reducers: {
    setSong: (state, action) => {
      state.currentSong = action.payload;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    addFavorite: (state, action) => {
      const exists = state.favorites.find(s => s.id === action.payload.id);
      if (!exists) state.favorites.push(action.payload);
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(s => s.id !== action.payload);
    },
  },
});

export const { setSong, playPause, addFavorite, removeFavorite } = playerSlice.actions;
export default playerSlice.reducer;
