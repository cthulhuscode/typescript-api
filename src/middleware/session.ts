import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/request.interface";
import { verifyToken } from "../utils/jwt";

export const checkSession = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization || "";
    token = `${token.split(" ").pop()}`;

    if (!token)
      return res
        .status(401)
        .json({ msg: "Unauthorized to access this resource" });

    const user = verifyToken(token) as { id: string };

    if (!user)
      return res
        .status(401)
        .json({ msg: "Unauthorized to access this resource" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized to access this resource" });
  }
};
