import { hash, compare } from "bcryptjs";

export const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  if (!passwordHash) throw new Error("Unable to encrypt password");
  return passwordHash;
};

export const verify = async (plainPassword: string, hashedPassword: string) => {
  return await compare(plainPassword, hashedPassword);
};
