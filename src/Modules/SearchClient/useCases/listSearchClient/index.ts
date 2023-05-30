import { SearchClientRepository } from "../../repositories/implementations/SearchClientRepository";
import { ListSearchClientController } from "./ListSearchClientController";
import { ListSearchClientUseCase } from "./ListSearchClientUseCase";

const searchClientRepository = SearchClientRepository.getInstance();

const listSearchClientUsecase = new ListSearchClientUseCase(searchClientRepository);

const listSearchClientController = new ListSearchClientController(listSearchClientUsecase);

export { listSearchClientController };
