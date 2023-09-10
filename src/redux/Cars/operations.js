import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carsInstance = axios.create({
  baseURL: "https://64f6188c2b07270f705e230d.mockapi.io",
});

export const fetchCarsByPage = createAsyncThunk(
  "cars/fatchByPage",
  async (_, thunkAPI) => {
    try {
      const { cars } = thunkAPI.getState();

      const { data } = await carsInstance.get("/catalog", {
        params: { page: cars.page, limit: 8 },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
