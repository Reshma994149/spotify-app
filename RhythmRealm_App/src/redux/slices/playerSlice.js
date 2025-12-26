import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setSong(state, action) {
      state.currentSong = action.payload;
    },
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
  },
});

export const { setSong, play, pause } = playerSlice.actions;

export default playerSlice.reducer;
