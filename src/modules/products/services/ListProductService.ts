import { prismaClient } from "../../../shared/prisma";
export class ListProductService {
  async execute() {
    const products = await prismaClient.products.findMany();
    return products;
  }
}
