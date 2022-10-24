import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"; // Gets the index.ts
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(router);
db().then(() => {
  console.log("DB Connected");
});

app.listen(PORT, () => console.log("Listening on localhost:" + PORT));
