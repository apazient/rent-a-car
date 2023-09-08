import React from "react";
import { useSelector } from "react-redux";
import {
  getAccesAndFunc,
  getConditions,
  getMainDetail,
} from "../../helpers/dataNormalize";
import { selectItem } from "../../redux/Global/selectors";

const CarDetails = () => {
  const props = useSelector(selectItem);
  console.log(props);

  const main = getMainDetail(props);
  const { country, city, id, year, typ, fuelConsumption, engineSize } = main;
  const mainArray = Object.values(main);
  const access = getAccesAndFunc(props);
  const accessArray = Object.values(access);
  const condit = getConditions(props);
  const conditArray = Object.values(condit);

  return (
    <li>
      <img src={props.img} alt={typ} />
      <div>
        {mainArray.map((el) => (
          <span>{el}</span>
        ))}
      </div>
      <div>{props.description}</div>
      <div>
        <span>Accessories and functionalities:</span>
        <div>
          {accessArray.map((el) => (
            <span>{el}</span>
          ))}
        </div>
      </div>
      <div>
        <span>Reantal Conditions</span>
        <div>
          {conditArray.map((el) => (
            <span>{el}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default CarDetails;
