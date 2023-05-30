import { ClientCompanyRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { ListClientCompanyUnicUseCase } from "./ListClientCompanyUnicUseCase";
import { ListClientCompanyUnicController } from "./ListClientCompanyUnicController";

const clientCompanyRepository = ClientCompanyRepository.getInstance();

const listClientCompanyUnicUsecase = new ListClientCompanyUnicUseCase(clientCompanyRepository);

const listClientCompanyUnicController = new ListClientCompanyUnicController(listClientCompanyUnicUsecase);

export { listClientCompanyUnicController };


