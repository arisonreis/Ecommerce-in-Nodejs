import { prismaClient } from "../../../shared/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

export class CreateProductService {
  async execute({ name, price, quantity }: IRequest) {
    const ProductExists = await prismaClient.products.findFirst({
      where: {
        name: name,
        quantity: quantity,
        price: price,
      },
    });
    if (ProductExists) throw new AppError("Produto já existe", 400);
  
    const CreateProduct = await prismaClient.products.create({
      data: {
        name,
        price,
        quantity,
      },
    });
    if (CreateProduct) return CreateProduct;
  }
}
