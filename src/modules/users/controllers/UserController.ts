import { Request, Response } from "express";
import { AppError } from "../../../shared/errors/AppError";
import { CreateUserService } from "../services/CreateUserService";
interface IrequestBody {
  name: string;
  email: string;
  avatar_url?: string;
  password: string;
  id: string;
  old_password: string;
}
export class UserController {
  async create(req: Request, res: Response) {
    const { email, name, avatar_url, password }: IrequestBody = req.body;
    if (!name || !email) {
      throw new AppError("Nome e Email são obrigatórios");
    }
    await new CreateUserService()
      .execute({
        email,
        name,
        avatar_url: avatar_url ?? "",
        password,
      })
      .catch(() => {
        throw new AppError("ocorreu um erro ao criar o usuário", 500);
      });
  }

  async update(req: Request, res: Response) {
    const {
      email,
      id,
      name,
      password,
      avatar_url,
      old_password,
    }: IrequestBody = req.body;

    if (password && !old_password)
      throw new AppError(
        "Para atualizar a senha atual deve se informar a Senha antiga"
      );
  }

  async list() {
    
  }
  async show() {}

  async delete() {}
}
