import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Cars/carsSlice";
import { favouriteCarReducer } from "./Favorite/favoriteSlice";
import { globalReducer } from "./Global/globalSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    global: globalReducer,
    favourite: favouriteCarReducer,
  },
});
