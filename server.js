import express from "express";
import { APP_Port, DB_URL } from "./config";
import routes from "./Routes";
import errorHandler from "./middlewares/errorHandlers";
import mongoose from "mongoose";
var app = express();
var cors = require("cors");

//DATEBASE CONNECTION

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use(cors());
app.use("/v1/api", routes);

app.use(errorHandler);

app.listen(APP_Port, () => console.log(`Listing on port ${APP_Port}`));
