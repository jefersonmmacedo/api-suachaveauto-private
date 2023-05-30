import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { ListContractsUnicUseCase } from "./ListContractsUnicUseCase";
import { ListContractsUnicController } from "./ListContractsUnicController";

const contractsRepository = ContractsRepository.getInstance();

const listContractsUnicUsecase = new ListContractsUnicUseCase(contractsRepository);

const listContractsUnicController = new ListContractsUnicController(listContractsUnicUsecase);

export { listContractsUnicController };
