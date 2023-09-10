import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccesAndFunc,
  getConditions,
  getMainDetail,
} from "../../helpers/dataNormalize";
import { formatNumber } from "../../helpers/helpers";
import { closeModal } from "../../redux/Global/globalSlice";
import { selectItem } from "../../redux/Global/selectors";
import { Focus, ImgWrapper, Text } from "../../styles/SharedStyles";
import {
  Button,
  Condit,
  Descr,
  FocusC,
  TextD,
  TitleD,
  WrapperCondit,
  WrapperDetail,
  WrapperSvgX,
  WrapperTextD,
  WrapperTextF,
} from "./CarDetails.styled";
import { nanoid } from "nanoid";

const CarDetails = () => {
  const item = useSelector(selectItem);
  const dispatch = useDispatch();

  const car = getMainDetail(item);

  const { year, fuelConsumption, engineSize, city, country, typ, id } = car;

  const { res } = getAccesAndFunc(item);

  const { condit, price, mileage } = getConditions(item);

  return (
    <WrapperDetail>
      <ImgWrapper>
        <img src={item.img} alt={item.typ} />
      </ImgWrapper>

      <TitleD>
        {item.make} <Focus> {item.model}</Focus>, {item.year}
      </TitleD>
      <WrapperTextD>
        <Text>{city.slice(0, city.length - 1)}</Text>
        <Text>{country}</Text>
        <Text>{id}</Text>
        <Text>{year}</Text>
        <Text>{typ}</Text>
        <Text>{fuelConsumption}</Text>
        <Text>{engineSize}</Text>
      </WrapperTextD>
      <Descr>{item.description}</Descr>

      <TextD>Accessories and functionalities:</TextD>
      <WrapperTextF>
        {res.map((el) => (
          <Text key={nanoid()}>{el}</Text>
        ))}
      </WrapperTextF>

      <div>
        <TextD>Reantal Conditions:</TextD>
        <WrapperCondit>
          {condit.map((el) => {
            const m = el.match(/\d+/);
            if (m) {
              const newEl = m.input.slice(0, m.index);
              return (
                <Condit key={nanoid()}>
                  {newEl} <FocusC> {m[0]}</FocusC>
                </Condit>
              );
            }
            return <Condit>{el}</Condit>;
          })}
          <Condit>
            Price: <FocusC>{price}$</FocusC>
          </Condit>
          <Condit>{formatNumber(mileage)}</Condit>
        </WrapperCondit>
      </div>
      <Button href="tel:+380730000000">Rental car</Button>
      <WrapperSvgX
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6 6 18M6 6l12 12"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </WrapperSvgX>
    </WrapperDetail>
  );
};

export default CarDetails;
