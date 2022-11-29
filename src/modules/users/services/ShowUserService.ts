import { AppError } from "../../../shared/errors/AppError";
import { prismaClient } from "../../../shared/prisma";

interface IRequest {
  id: string;
}
export class ShowUserService {
  async execute({ id }: IRequest) {
    const User = await prismaClient.users.findFirst({
      where: { id },
    });
    if(!User) throw new AppError("usuário não existe")
    return User
  }
}
