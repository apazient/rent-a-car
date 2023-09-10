import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarsByPage, fetchCarsFirst } from "./operations";

const initialState = {
  cars: [],
  page: 1,
  isLoading: false,
  rest: null,
};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    incPage(state, _) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(fetchCarsFirst.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(fetchCarsByPage.fulfilled, (state, { payload }) => {
        state.rest = payload.length;
        if (payload.length !== 0) {
          state.cars = [...state.cars, ...payload];
        }
        state.isLoading = false;
        return;
      })
      .addCase(fetchCarsByPage.pending, (state, { payload }) => {
        state.isLoading = true;
      });
  },
});
export const { incPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
