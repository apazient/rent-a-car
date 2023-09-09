import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carsInstance = axios.create({
  baseURL: "https://64f6188c2b07270f705e230d.mockapi.io",
});

export const fetchCars = createAsyncThunk(
  "cars/fatchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await carsInstance.get("/catalog");

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCarsByPage = createAsyncThunk(
  "cars/fatchByPage",
  async (_, thunkAPI) => {
    try {
      const { cars } = thunkAPI.getState();
      console.log(cars.page);

      const { data } = await carsInstance.get("/catalog", {
        params: { page: cars.page, limit: 8 },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCarsFirst = createAsyncThunk(
  "cars/fatchCarsFirst",
  async (_, thunkAPI) => {
    try {
      const { data } = await carsInstance.get("/catalog", {
        params: { page: 1, limit: 8 },
      });

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
