import { Router } from "express";
import { ProductRoutes } from "../../../modules/products/routes/product.routes";
import { userRoutes } from "../../../modules/users/routes/User.routes";
const routes = Router();

routes.use("/product", ProductRoutes);
routes.use("/user", userRoutes);

export { routes };
