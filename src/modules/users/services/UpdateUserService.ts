import { prismaClient } from "../../../shared/prisma";
import { AppError } from "../../../shared/errors/AppError";
import { compare, hash } from "bcrypt";
export interface IRequest {
  name: string;
  email: string;
  avatar_url?: string;
  password: string;
  old_password: string;
  id: string;
}
export class UpdateUserService {
  async execute({
    id,
    email,
    name,
    password,
    avatar_url,
    old_password,
  }: IRequest) {
    const UserExists = await prismaClient.users.findFirst({
      where: {
        id,
      },
    });
    if (!UserExists) throw new AppError("Usuário não existe");
    const EmailExists = await prismaClient.users.findFirst({
      where: {
        email,
      },
    });
    if (EmailExists && EmailExists.id !== UserExists.id)
      throw new AppError("Email já em uso");

    if (password && old_password) {
      const passwordCompared = await compare(old_password, UserExists.password);
      if (!passwordCompared)
        throw new AppError("A senha antiga está incorreta");
      UserExists.password = await hash(password, 8);
    }
    await prismaClient.users.update({
      data: {
        email: email ?? UserExists.email,
        name: name ?? UserExists.name,
        password: UserExists.password,
        avatar_url: avatar_url ?? UserExists.password,
        updated_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
