import { Router } from "express";
import { UserController } from "../controllers/UserController";
const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/create", userController.create);
userRoutes.put("/update", userController.update);
userRoutes.get("/list", userController.list);
userRoutes.get("/show/:id", userController.show);
userRoutes.delete("/delete", userController.delete);

export { userRoutes };
