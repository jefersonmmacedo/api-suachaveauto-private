import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { ListContractsUseCase } from "./ListContractsUseCase";
import { ListContractsController } from "./ListContractsController";

const contractsRepository = ContractsRepository.getInstance();

const listContractsUsecase = new ListContractsUseCase(contractsRepository);

const listContractsController = new ListContractsController(listContractsUsecase);

export { listContractsController };
