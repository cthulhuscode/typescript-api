import { Router } from "express";
import {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem,
} from "../controllers/items";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", checkSession, postItem); // Private route, only logged in users
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
