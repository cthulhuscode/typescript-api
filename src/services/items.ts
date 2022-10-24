/**
 * Los services son los encargados de la lógica de negocio
 */

import Item from "../models/Item";
import Car from "../interfaces/car.interface";

export const getCar = async (id: string) => {
  const responseItem = await Item.findOne({ _id: id });
  return responseItem;
};

export const getCars = async () => {
  const responseItems = await Item.find({});
  return responseItems;
};

export const insertCar = async (item: Car) => {

  

  const responseInsert = await Item.create(item);
  return responseInsert;
};

export const updateCar = async (id: string, data: Car) => {
  const updateResponse = await Item.findOneAndUpdate({ _id: id }, data, {
    new: true, // Show updated car
  });
  return updateResponse;
};

export const deleteCar = async (id: string) => {
  return await Item.findByIdAndDelete({ _id: id });
};
