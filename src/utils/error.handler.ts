import { Response } from "express";

export const httpErrorHandler = (error: any, msg: string, res: Response) => {
  console.error(error);
  res.status(500).json({ msg });
};
