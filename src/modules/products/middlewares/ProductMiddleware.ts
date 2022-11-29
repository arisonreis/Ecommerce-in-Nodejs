import { NextFunction, Request, Response } from "express";
import { validate } from "uuid";
import { AppError } from "../../../shared/errors/AppError";

export class ProductMiddleware {
  execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const uuidValidate = validate(id);
    if (!uuidValidate)
      throw new AppError(
        "The ID reported is not of type UUID, please report a ID valid"
      );
    next();
  }
}
