import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/User";
import { encrypt, verify } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

export const registerNewUser = async ({ name, age, email, password }: User) => {
  const existUser = await UserModel.findOne({ email });
  if (existUser) throw new Error("The user already exists");

  const encryptedPassword = await encrypt(password);

  const newUser = await UserModel.create({
    name,
    age,
    email,
    password: encryptedPassword,
  });
  if (!newUser) throw new Error("Error when creating the user");
  else return newUser;
};

export const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("The user doesn't exist");

  const isCorrect = await verify(password, user.password);

  if (!isCorrect) throw new Error("The password is not correct");

  let noPasswordUser = JSON.parse(JSON.stringify(user));
  delete noPasswordUser.password;

  const token = generateToken(user._id.toString());

  return { token, user: noPasswordUser };
};
