import { Auth } from "./auth.interface";

/**
 * Extends the properties of Auth
 * it means that User will have
 * password and email
 */
export interface User extends Auth {
  name: string;
  age: number;
}
