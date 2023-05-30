import { DeletedCompanyRepository } from "../../repositories/implementations/DeletedCompanyRepository";
import { ListDeletedCompanyUserController } from "./ListDeletedCompanyUserController";
import { ListDeletedCompanyUserUseCase } from "./ListDeletedCompanyUserUseCase";

const deletedCompanyRepository = DeletedCompanyRepository.getInstance();

const listDeletedCompanyUserUsecase = new ListDeletedCompanyUserUseCase(deletedCompanyRepository);

const listDeletedCompanyUserController = new ListDeletedCompanyUserController(listDeletedCompanyUserUsecase);

export { listDeletedCompanyUserController };
