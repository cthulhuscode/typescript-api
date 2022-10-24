import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

export const register = async (req: Request, res: Response) => {
  const response = await registerNewUser(req.body);
  res.status(201).json(response);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const loggedUser = await loginUser({ email, password });
  res.status(200).json(loggedUser);
};
