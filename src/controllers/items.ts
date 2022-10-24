import { Request, Response } from "express";
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/items";
import { httpErrorHandler } from "../utils/error.handler";

export const getItem = async (req: Request, res: Response) => {
  try {
    const response = await getCar(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    httpErrorHandler(error, "ERROR_GET_ITEM", res);
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars();
    res.status(200).json(items);
  } catch (error) {
    httpErrorHandler(error, "ERROR_GET_ITEMS", res);
  }
};

export const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.status(200).json(responseItem);
  } catch (error) {
    httpErrorHandler(error, "ERROR_POST_ITEM", res);
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const car = await updateCar(req.params.id, req.body);
    res.status(200).json(car);
  } catch (error) {
    httpErrorHandler(error, "ERROR_UPDATE_ITEM", res);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const response = await deleteCar(req.params.id);
    if (response) res.status(200).json({ msg: "Car deleted" });
  } catch (error) {
    httpErrorHandler(error, "ERROR_DELETE_ITEM", res);
  }
};
