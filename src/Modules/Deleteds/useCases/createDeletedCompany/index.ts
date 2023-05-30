import { DeletedCompanyRepository } from "../../repositories/implementations/DeletedCompanyRepository";
import { CreateDeletedCompanyController } from "./CreateDeletedCompanyController";
import { CreateDeletedCompanyUseCase } from "./CreateDeletedCompanyUseCase";

const deletedCompanyRepository = DeletedCompanyRepository.getInstance();

const createDeletedCompanyUseCase = new CreateDeletedCompanyUseCase(deletedCompanyRepository);

const createDeletedCompanyController = new CreateDeletedCompanyController(createDeletedCompanyUseCase);

export { createDeletedCompanyController };
