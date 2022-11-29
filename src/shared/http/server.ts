import "express-async-errors";
import * as express from "express";
import * as cors from "cors";
import { routes } from "./routes";
import { AppError } from "../errors/AppError";
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  (
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    return res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);
app.listen(3333, () => {
  console.log("server running");
});
