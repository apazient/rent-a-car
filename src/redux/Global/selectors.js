import { createSelector } from "@reduxjs/toolkit";

export const selectIsModalDetailOpen = (state) => {
  return state.global.isModalDetailOpen;
};

export const selectItem = createSelector(
  [(state) => state.cars, (state) => state.global.select],
  (data, id) => {
    return data.cars.find((item) => item.id === id);
  }
);
