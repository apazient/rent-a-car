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
    dispatch(fetchCarsByPage());
  }, [dispatch, incPage]);

  return (
    <>
      <ul>
        {data.map((car) => {
          return <CarItem key={car.id} {...car} />;
        })}
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
