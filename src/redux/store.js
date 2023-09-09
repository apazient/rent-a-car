import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Cars/carsSlice";
import { favouriteCarReducer } from "./Favorite/favoriteSlice";
import { globalReducer } from "./Global/globalSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistFvorite = {
  key: "favorite",
  version: 1,
  storage,
  whitelist: ["favouriteCars"],
};
export const store = configureStore({
  reducer: {
    cars: carsReducer,
    global: globalReducer,
    favourite: persistReducer(persistFvorite, favouriteCarReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
