import { AppError } from "../../../shared/errors/AppError";
import { prismaClient } from "../../../shared/prisma";
interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export class UpdateProductService {
  async execute({ id, name, price, quantity }: IRequest) {
    const checkProduct = await prismaClient.products.findFirst({
      where: {
        id,
      },
    });
    if (!checkProduct) throw new AppError("Este produto não está cadastrado");
    if (
      name == checkProduct.name ||
      price == checkProduct.price ||
      quantity == checkProduct.quantity
    )
      throw new AppError("este produto já está atualizado");
    const NewProduct = await prismaClient.products
      .update({
        data: {
          name: name ?? checkProduct.name,
          price: price ?? checkProduct.price,
          quantity: quantity ?? checkProduct.quantity,
          updated_at: new Date(),
        },
        where: { id },
      })
      .catch(() => {
        throw new AppError("Não foi possível atualizar este produto", 500);
      });
    return NewProduct;
  }
}
