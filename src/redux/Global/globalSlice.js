import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModalDetailOpen: false,
  select: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsModalDetailOpen: (state, { payload }) => {
      state.isModalDetailOpen = payload.flag;
      state.select = payload.id;
    },
    closeModal: (state, { payload }) => {
      state.isModalDetailOpen = false;
      state.select = null;
    },
  },
});
export const { setIsModalDetailOpen, closeModal } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
