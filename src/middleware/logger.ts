import { Request, Response, NextFunction } from "express";
import Log from "../models/Log";

export const logger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const log = {
    hostname: req.hostname,
    ip: req.ip,
    method: req.method,
    url: req.originalUrl,
  };

  await Log.create(log);

  next();
};
