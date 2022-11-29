import { AppError } from "../../../shared/errors/AppError";
import { prismaClient } from "../../../shared/prisma";
import { ShowProductService } from "../services/ShowProductService";
interface iDeleteProduct {
  id: string;
}
export class DeleteProductService {
  async execute({ id }: iDeleteProduct) {
    const ProductExists = await new ShowProductService().execute({
      id,
    });
    if (!ProductExists) throw new AppError("Este produto não existe", 400);
    await prismaClient.products.delete({
      where: {
        id,
      },
    });
  }
}
