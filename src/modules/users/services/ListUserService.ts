import { prismaClient } from "../../../shared/prisma";

export class ListUserService {
  async execute() {
    const users = await prismaClient.users.findMany();
    if (users) return users;
  }
}
