import { Request, Response, Router } from "express";
import { login, register } from "../controllers/auth";

export const router = Router();

router.post("/register", register);
router.post("/login", login);
