import { SearchClientRepository } from "../../repositories/implementations/SearchClientRepository";
import { CreateSearchClientController } from "./CreateSearchClientController";
import { CreateSearchClientUseCase } from "./CreateSearchClientUseCase";

const searchClientRepository = SearchClientRepository.getInstance();

const createSearchClientUseCase = new CreateSearchClientUseCase(searchClientRepository);

const createSearchClientController = new CreateSearchClientController(createSearchClientUseCase);

export { createSearchClientController };
