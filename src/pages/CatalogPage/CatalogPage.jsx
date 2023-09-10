import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarGallery from "../../components/CarGallery/CarGallery";
import { incPage } from "../../redux/Cars/carsSlice";
import { fetchCarsByPage } from "../../redux/Cars/operations";

import { isLoading, selectRes } from "../../redux/Cars/selectors";
import { LoadMore } from "./CatalogPage.styled";
import Loader from "../../components/Loader/Loader";
import { WrapperCatalog } from "../../styles/SharedStyles";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector(isLoading);
  const restCars = useSelector(selectRes);

  const handleLoadMore = () => {
    dispatch(incPage());
    dispatch(fetchCarsByPage());
  };

  return (
    <WrapperCatalog>
      <CarGallery />
      {isLoad && <Loader />}

      {!(restCars < 8) && (
        <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
      )}
    </WrapperCatalog>
  );
};
