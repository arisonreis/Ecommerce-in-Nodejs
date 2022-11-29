import { ShowProductService } from "../src/modules/products/services/ShowProductService";
import { ListProductService } from "../src/modules/products/services/ListProductService";
import { DeleteProductService } from "../src/modules/products/services/DeleteProductService";
import { CreateProductService } from "../src/modules/products/services/CreateProductService";
import { UpdateProductService } from "../src/modules/products/services/UpdateProductServcice";
import { AppError } from "../src/shared/errors/AppError";
import { CreateUserService } from "../src/modules/users/services/CreateUserService";
import { UpdateUserService } from "../src/modules/users/services/UpdateUserService";
import { DeleteUserService } from "../src/modules/users/services/DeleteUserService";
import { ListUserService } from "../src/modules/users/services/ListUserService";
async function Main() {
  const createuser = async () => {
    await new CreateUserService()
      .execute({
        email: "arison@emailteste.com",
        name: "usuário test#2",
        avatar_url: "https://localhost/images/user.png",
        password: "usertest#2",
      })
      .catch(() => {
        console.log("ocorreu um erro");
      });
  };

  const updateUser = async () => {
    await new UpdateUserService()
      .execute({
        id: "e26dc04d-f45c-463f-abf5-41cd855cadad",
        email: undefined,
        name: undefined,
        password: "arsss",
        old_password: "password#1",
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async () => {
    await new DeleteUserService()
      .execute({
        id: "e26dc04d-f45c-463f-abf5-41cd855cadad",
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const List = async () => {
    const a = await new ListUserService().execute();
    console.log(a);
  };
  await List();
}
Main();
