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
