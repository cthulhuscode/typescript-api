import { Schema, Types, Model, model } from "mongoose";
import Log from "../interfaces/log.interface";

const LogSchema = new Schema<Log>(
  {
    hostname: {
      type: String,
    },
    ip: {
      type: String,
    },
    method: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const LogModel = model("logs", LogSchema);
export default LogModel;
