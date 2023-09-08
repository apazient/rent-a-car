import React from "react";
import { useDispatch } from "react-redux";
import { getMainCar } from "../../helpers/dataNormalize";
import { removeFromFav } from "../../redux/Favorite/favoriteSlice";
import { setIsModalDetailOpen } from "../../redux/Global/globalSlice";

const FavoriteItem = (props) => {
  const dispatch = useDispatch();

  const car = getMainCar(props);
  const carArray = Object.values(car);
  return (
    <li>
      <img src={props.img} alt={props.typ} />
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
      <button onClick={() => dispatch(removeFromFav(props.id))}>
        Remove from favourite
      </button>
    </li>
  );
};

export default FavoriteItem;
