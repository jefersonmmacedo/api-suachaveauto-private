import { DeletedClientRepository } from "../../repositories/implementations/DeletedClientRepository";
import { ListDeletedClientUserController } from "./ListDeletedClientUserController";
import { ListDeletedClientUserUseCase } from "./ListDeletedClientUserUseCase";

const deletedClientRepository = DeletedClientRepository.getInstance();

const listDeletedClientUserUsecase = new ListDeletedClientUserUseCase(deletedClientRepository);

const listDeletedClientUserController = new ListDeletedClientUserController(listDeletedClientUserUsecase);

export { listDeletedClientUserController };
