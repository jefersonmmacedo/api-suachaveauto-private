import { DeletedClientRepository } from "../../repositories/implementations/DeletedClientRepository";
import { ListDeletedClientController } from "./ListDeletedClientController";
import { ListDeletedClientUseCase } from "./ListDeletedClientUseCase";

const deletedClientRepository = DeletedClientRepository.getInstance();

const listDeletedClientUsecase = new ListDeletedClientUseCase(deletedClientRepository);

const listDeletedClientController = new ListDeletedClientController(listDeletedClientUsecase);

export { listDeletedClientController };
