import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { UpdateContractController } from "./UpdateContractController";
import { UpdateContractUseCase } from "./UpdateContractUseCase";

const contractsRepository = ContractsRepository.getInstance();

const updateContractUseCase = new UpdateContractUseCase(contractsRepository);

const updateContractController = new UpdateContractController(updateContractUseCase);

export { updateContractController };
