import { SearchClientRepository } from "../../repositories/implementations/SearchClientRepository";
import { ListSearchClientUserController } from "./ListSearchClientUserController";
import { ListSearchClientUserUseCase } from "./ListSearchClientUserUseCase";

const searchClientRepository = SearchClientRepository.getInstance();

const listSearchClientUserUsecase = new ListSearchClientUserUseCase(searchClientRepository);

const listSearchClientUserController = new ListSearchClientUserController(listSearchClientUserUsecase);

export { listSearchClientUserController };
