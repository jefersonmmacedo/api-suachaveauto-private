import { SearchClientRepository } from "../../repositories/implementations/SearchClientRepository";
import { ListSearchClientMatchController } from "./ListSearchClientMatchController";
import { ListSearchClientMatchUseCase } from "./ListSearchClientMatchUseCase";

const searchClientRepository = SearchClientRepository.getInstance();

const listSearchClientMatchUsecase = new ListSearchClientMatchUseCase(searchClientRepository);

const listSearchClientMatchController = new ListSearchClientMatchController(listSearchClientMatchUsecase);

export { listSearchClientMatchController };
