import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { ProductMiddleware } from "../middlewares/productMiddleware";
const ProductRoutes = Router();
const productController = new ProductController();
const productMiddleware = new ProductMiddleware();
ProductRoutes.post("/create", productController.CreateProduct);
ProductRoutes.get("/list", productController.ListProduct);
ProductRoutes.get(
  "/show/:id",
  productMiddleware.execute,
  productController.ShowProduct
);
ProductRoutes.put("/update", productController.UpdateProduct);
ProductRoutes.delete(
  "/delete/:id",
  productMiddleware.execute,
  productController.DeletePoduct
);

export { ProductRoutes };
