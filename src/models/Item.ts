import { Schema, Types, Model, model } from "mongoose";
import Car from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["Gasoline", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
