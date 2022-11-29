import { prismaClient } from "../../../shared/prisma";
import { AppError } from "../../../shared/errors/AppError";
import { hash } from "bcrypt";
export interface IRequest {
  name: string;
  email: string;
  avatar_url?: string;
  password: string;
}
export class CreateUserService {
  async execute({ avatar_url, email, name, password }: IRequest) {
    const UserExists = await prismaClient.users.findFirst({
      where: {
        email,
      },
    });
    if (UserExists) throw new AppError("Endereço de email já existe");
    const passwordHashed = await hash(password, 8);
    await prismaClient.users.create({
      data: {
        name,
        email,
        password: passwordHashed,
        avatar_url,
      },
    });
  }
}
