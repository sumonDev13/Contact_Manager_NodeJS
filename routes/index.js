import { Router } from "express";
import userRoutes from "./userRoutes.js";
import contactRoutes from "./contactRoutes.js";

const routes = Router();


routes.use("/contacts", contactRoutes);
routes.use("/users", userRoutes);

export default routes;