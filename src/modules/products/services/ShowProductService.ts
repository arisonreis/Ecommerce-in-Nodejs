import { AppError } from "../../../shared/errors/AppError";
import { prismaClient } from "../../../shared/prisma";
interface IRequest {
  id: string;
}
export class ShowProductService {
  async execute({ id }: IRequest) {
    const Product = await prismaClient.products.findFirst({
      where: {
        id,
      },
    });
    if (!Product) throw new AppError("Este produto não está cadastrado");
    return Product;
  }
}
