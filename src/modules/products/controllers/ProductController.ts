import { Request, Response } from "express";
import { AppError } from "../../../shared/errors/AppError";
import { ListProductService } from "../services/ListProductService";
import { ShowProductService } from "../services/ShowProductService";
import { UpdateProductService } from "../services/UpdateProductServcice";
import { CreateProductService } from "../services/CreateProductService";
import { DeleteProductService } from "../services/DeleteProductService";
interface IRequestBody {
  id: string;
  name: string;
  quantity?: number;
  price?: number;
}

export class ProductController {
  async CreateProduct(req: Request, res: Response) {
    const { name, price, quantity }: IRequestBody = req.body;
    if (!name || !price || !quantity)
      throw new AppError(
        "Você deve informar todos os dados para acriação do produto"
      );
    const Newproduct = await new CreateProductService().execute({
      name,
      price,
      quantity,
    });
    if (Newproduct)
      return res.status(201).json({
        message: "usuário criado com sucesso",
      });
  }
  async ListProduct(req: Request, res: Response) {
    const list = await new ListProductService().execute();
    return res.json(list);
  }
  async ShowProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await new ShowProductService().execute({ id });
    return res.json(product);
  }
  async UpdateProduct(req: Request, res: Response) {
    const { id, name, price, quantity }: IRequestBody = req.body;
    if (!id) throw new AppError("Informe o id do produto");
    if (!name && !price && !quantity)
      throw new AppError("Informe o campo que será atualizado");
    await new UpdateProductService().execute({
      id,
      price,
      quantity,
      name,
    });
    return res.json({
      message: "Produto atualizado com sucesso",
    });
  }
  async DeletePoduct(req: Request, res: Response) {
    const { id } = req.params;
    await new DeleteProductService().execute({ id });
    return res.status(200).json({
      message: "Produto deletado com sucesso",
    });
  }
}
