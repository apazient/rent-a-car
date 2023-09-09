import { findWordInArray, revStringToArray } from "./helpers";

export const getMainDetail = (data) => {
  return {
    country: revStringToArray(data.address)[0],
    city: revStringToArray(data.address)[1],
    id: `Id:${data.id}`,
    year: `Year: ${data.year}`,
    typ: `Type: ${data.type}`,
    fuelConsumption: `Fuel Consumption: ${data.fuelConsumption}`,
    engineSize: `Engine Size: ${data.engineSize}`,
  };
};

export const getAccesAndFunc = (data) => {
  return {
    res: [...data.accessories, ...data.functionalities],
  };
};

export const getConditions = (data) => {
  return {
    condit: data.rentalConditions,
    price: `Price: ${data.rentalPrice}$`,
    mileage: `Mileage: ${data.mileage}`,
  };
};

export const getMainCar = (data) => {
  const access = [...data.accessories, ...data.functionalities];
  const prem = findWordInArray("premium", access);

  return {
    country: revStringToArray(data.address)[0],
    city: revStringToArray(data.address)[1],
    rentalCompany: data.rentalCompany,
    type: data.type,
    year: data.year,
    model: data.model,
    id: data.id,
    feacher: prem,
    price: data.rentalPrice,
    art: (prem.includes("Premium") || prem.includes("premium")) && "Premium",
  };
};
