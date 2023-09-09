import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarGallery from "../components/CarGallery/CarGallery";
import { incPage } from "../redux/Cars/carsSlice";

import { selectCars } from "../redux/Cars/selectors";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCars);

  console.log(data.length);
  return (
    <div>
      <CarGallery />
      {data.length && (
        <button
          onClick={() => {
            dispatch(incPage());
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};
