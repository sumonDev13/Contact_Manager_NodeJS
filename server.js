import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

import { errorHandler } from "./middleware/errorHandler.js";
import { connectionDB } from "./config/db.js";

const app = express();
app.use(express.json());
app.use(errorHandler);
dotenv.config();

const port = process.env.PORT;
connectionDB();

app.use("/api", routes);


app.listen(port, () => {
  console.log(`listening on ${port}`);
});
