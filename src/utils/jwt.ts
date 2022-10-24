import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "appxd";

export const generateToken = (id: string) => {
  const token = sign({ id }, JWT_SECRET, {
    expiresIn: "4h",
  });
  return token;
};

export const verifyToken = (token: string) => {
  return verify(token, JWT_SECRET);
};
