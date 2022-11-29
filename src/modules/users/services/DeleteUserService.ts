import { AppError } from "../../../shared/errors/AppError";
import { prismaClient } from "../../../shared/prisma";
interface IRequest {
  id: string;
}
export class DeleteUserService {
  async execute({ id }: IRequest) {
    const UserExists = await prismaClient.users.findFirst({
      where: {
        id,
      },
    });
    if (!UserExists) throw new AppError("Usuário não existe");

    await prismaClient.users.delete({
      where: {
        id,
      },
    });
  }
}
