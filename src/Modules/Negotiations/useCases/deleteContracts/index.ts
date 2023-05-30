import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { DeleteContractsController } from "./DeleteContractsController";
import { DeleteContractsUseCase } from "./DeleteContractsUseCase";

const contractsRepository = ContractsRepository.getInstance();
const deleteContractsUseCase = new DeleteContractsUseCase(contractsRepository);
const deleteContractsController = new DeleteContractsController(deleteContractsUseCase);

export { deleteContractsController };
