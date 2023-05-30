import { ContractsRepository } from "../../repositories/implementations/ContractsRepository";
import { ListContractsCompanyUseCase } from "./ListContractsCompanyUseCase";
import { ListContractsCompanyController } from "./ListContractsCompanyController";

const contractsRepository = ContractsRepository.getInstance();

const listContractsCompanyUsecase = new ListContractsCompanyUseCase(contractsRepository);

const listContractsCompanyController = new ListContractsCompanyController(listContractsCompanyUsecase);

export { listContractsCompanyController };
