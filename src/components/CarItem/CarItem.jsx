import React from "react";
import { useDispatch } from "react-redux";
import { getMainCar } from "../../helpers/dataNormalize";
import { addCarToFav } from "../../redux/Favorite/favoriteSlice";
import { setIsModalDetailOpen } from "../../redux/Global/globalSlice";
import { ImgWrapper, Item } from "./CarItem.styled";

const CarItem = (props) => {
  const dispatch = useDispatch();

  const car = getMainCar(props);

  const carArray = Object.values(car);

  return (
    <Item>
      <ImgWrapper>
        <img src={props.img} alt={props.typ} />
      </ImgWrapper>
      <div>
        {carArray.map((el) => (
          <span>{el}</span>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(setIsModalDetailOpen({ id: props.id, flag: true }))
        }
      >
        Learn more
      </button>
      <button onClick={() => dispatch(addCarToFav(props))}>
        Add to favourite
      </button>
    </Item>
  );
};

export default CarItem;
