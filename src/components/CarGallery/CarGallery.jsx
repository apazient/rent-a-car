import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsByPage } from "../../redux/Cars/operations";
import { selectCars, selectPage } from "../../redux/Cars/selectors";
import { selectIsModalDetailOpen } from "../../redux/Global/selectors";
import CarDetails from "../CarDetails/CarDetails";
import CarItem from "../CarItem/CarItem";
import Modal from "../Modal/Modal";

const CarGallery = () => {
  const data = useSelector(selectCars);

  const incPage = useSelector(selectPage);
  const isModalDetail = useSelector(selectIsModalDetailOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      console.log("gallery");
      return;
    }
    dispatch(fetchCarsByPage());
  }, [dispatch, data.length, incPage]);

  const ViewData = () => data.map((car) => <CarItem key={car.id} {...car} />);

  return (
    <>
      <ul>
        <ViewData></ViewData>
      </ul>
      {isModalDetail && (
        <Modal>
          <CarDetails />
        </Modal>
      )}
    </>
  );
};

export default CarGallery;
