import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarGallery from "../components/CarGallery/CarGallery";
import { incPage } from "../redux/Cars/carsSlice";
import { fetchCarsByPage } from "../redux/Cars/operations";
import { selectPage } from "../redux/Cars/selectors";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  return (
    <div>
      <CarGallery />
      <button
        onClick={() => {
          dispatch(incPage());
        }}
      >
        Load more
      </button>
    </div>
  );
};
