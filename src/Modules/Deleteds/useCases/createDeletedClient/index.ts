import { DeletedClientRepository } from "../../repositories/implementations/DeletedClientRepository";
import { CreateDeletedClientController } from "./CreateDeletedClientController";
import { CreateDeletedClientUseCase } from "./CreateDeletedClientUseCase";

const deletedClientRepository = DeletedClientRepository.getInstance();

const createDeletedClientUseCase = new CreateDeletedClientUseCase(deletedClientRepository);

const createDeletedClientController = new CreateDeletedClientController(createDeletedClientUseCase);

export { createDeletedClientController };
