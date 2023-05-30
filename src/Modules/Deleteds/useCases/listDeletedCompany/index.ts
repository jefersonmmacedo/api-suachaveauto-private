import { DeletedCompanyRepository } from "../../repositories/implementations/DeletedCompanyRepository";
import { ListDeletedCompanyController } from "./ListDeletedCompanyController";
import { ListDeletedCompanyUseCase } from "./ListDeletedCompanyUseCase";

const deletedCompanyRepository = DeletedCompanyRepository.getInstance();

const listDeletedCompanyUsecase = new ListDeletedCompanyUseCase(deletedCompanyRepository);

const listDeletedCompanyController = new ListDeletedCompanyController(listDeletedCompanyUsecase);

export { listDeletedCompanyController };
