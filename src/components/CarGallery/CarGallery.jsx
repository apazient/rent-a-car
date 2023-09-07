import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/Cars/operations";
import { selectCars } from "../../redux/Cars/selectors";
import CarItem from "../CarItem/CarItem";

const CarGallery = () => {
  const data = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  console.log(data);
  const ViewData = () => data.map((car) => <CarItem key={car.id} {...car} />);

  return (
    <ul>
      <ViewData></ViewData>
    </ul>
  );
};

export default CarGallery;
