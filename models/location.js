import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  // id: { type: "number", required: true },
  name: { type: "string" },
  email: { type: "string" },
  location: { type: "string" },
});

export default mongoose.model("Location", locationSchema, "Locations");
