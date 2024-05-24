import { date, number } from "joi";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const empSchema = new Schema(
  {
    // id: { type: "number", default: "a"},
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    phone: { type: "number", required: true },
    jobrole: { type: "string", required: true },
    joiningDate: { type: "string", required: true },
    role: { type: "string", default: "Employee" },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", empSchema, "Employees");
