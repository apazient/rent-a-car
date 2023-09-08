import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteCars: [],
  },
  reducers: {
    addCarToFav: (state, { payload }) => {
      state.favouriteCars.push(payload);
    },
    removeFromFav: (state, { payload }) => {
      state.favouriteCars = state.favouriteCars.filter(
        (item) => item.id !== payload
      );
    },
  },
});

export const { addCarToFav, removeFromFav } = favouriteSlice.actions;
export const favouriteCarReducer = favouriteSlice.reducer;
