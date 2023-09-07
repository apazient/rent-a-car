import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
