import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { ListContractsClientUseCase } from "./ListContractsClientUseCase";
import { ListContractsClientController } from "./ListContractsClientController";

const contractsRepository = ContractsRepository.getInstance();

const listContractsClientUsecase = new ListContractsClientUseCase(contractsRepository);

const listContractsClientController = new ListContractsClientController(listContractsClientUsecase);

export { listContractsClientController };
