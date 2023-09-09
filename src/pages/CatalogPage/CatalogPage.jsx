import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarGallery from "../../components/CarGallery/CarGallery";
import { incPage } from "../../redux/Cars/carsSlice";

import { selectCars } from "../../redux/Cars/selectors";
import { LoadMore, WrapperCatalog } from "./CatalogPage.styled";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCars);

  return (
    <WrapperCatalog>
      <CarGallery />
      {data.length && (
        <LoadMore
          onClick={() => {
            dispatch(incPage());
          }}
        >
          Load more
        </LoadMore>
      )}
    </WrapperCatalog>
  );
};
