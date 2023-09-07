import React from "react";
import { getMainCar } from "../../helpers/dataNormalize";

const CarItem = (props) => {
  const car = getMainCar(props);
  const carArray = Object.values(car);
  console.log(car);
  return (
    <li>
      <img src={props.img} alt={props.typ} />
      <div>
        {carArray.map((el) => (
          <span>{el}</span>
        ))}
      </div>
    </li>
  );
};

export default CarItem;
