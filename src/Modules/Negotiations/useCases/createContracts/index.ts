import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { CreateContractsController } from "./CreateContractsController";
import { CreateContractsUseCase } from "./CreateContractsUseCase";

const contractsRepository = ContractsRepository.getInstance();

const createContractsUseCase = new CreateContractsUseCase(contractsRepository);

const createContractsController = new CreateContractsController(createContractsUseCase);

export { createContractsController };
