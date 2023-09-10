import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsByPage } from "../../redux/Cars/operations";
import { selectCars } from "../../redux/Cars/selectors";
import { selectIsModalDetailOpen } from "../../redux/Global/selectors";
import CarDetails from "../CarDetails/CarDetails";
import CarItem from "../CarItem/CarItem";
import Modal from "../Modal/Modal";
import { Gallery } from "./CarGallery.styled";

const CarGallery = () => {
  const data = useSelector(selectCars);

  const isModalDetail = useSelector(selectIsModalDetailOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      return;
    }
    dispatch(fetchCarsByPage());
  }, [dispatch, data.length]);
  return (
    <>
      <Gallery>
        {data.map((car) => {
          return <CarItem key={car.id} {...car} />;
        })}
      </Gallery>
      {isModalDetail && (
        <Modal>
          <CarDetails />
        </Modal>
      )}
    </>
  );
};

export default CarGallery;
