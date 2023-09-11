import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCar } from "../../helpers/dataNormalize";
import { addCarToFav } from "../../redux/Favorite/favoriteSlice";
import { selectFavoriteCars } from "../../redux/Favorite/selectors";
import { setIsModalDetailOpen } from "../../redux/Global/globalSlice";
import {
  Focus,
  ImgWrapper,
  Item,
  LearnButton,
  Text,
  Title,
  TitleBack,
  WrapperSvg,
  WrapperText,
} from "./CarItem.styled";

const CarItem = (props) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteCars);

  const car = getMainCar(props);
  const {
    make,
    model,
    year,
    price,
    city,
    country,
    rentalCompany,
    art,
    type,
    id,
    feacher,
  } = car;

  return (
    <Item>
      <ImgWrapper>
        <img src={props.img} alt={props.type} />
      </ImgWrapper>

      <Title>
        <div>
          {make} <Focus>{model}</Focus>, {year}
        </div>
        <TitleBack>{price}</TitleBack>
      </Title>
      <WrapperText>
        <Text>{city.slice(0, city.length - 1)}</Text>
        <Text>{country}</Text>
        <Text>{rentalCompany}</Text>
        <Text>{art}</Text>
        <Text>{type}</Text>
        <Text>{make}</Text>
        <Text>{id}</Text>
        <Text>{feacher}</Text>
      </WrapperText>
      <WrapperSvg onClick={() => dispatch(addCarToFav(props))}>
        {!favoriteItems?.find((el) => el.id === id) ? (
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"
              stroke="#fff"
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"
              stroke="##3470FF"
              fill="#3470FF"
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </WrapperSvg>
      <LearnButton
        onClick={() =>
          dispatch(setIsModalDetailOpen({ id: props.id, flag: true }))
        }
      >
        Learn more
      </LearnButton>
    </Item>
  );
};

export default CarItem;
