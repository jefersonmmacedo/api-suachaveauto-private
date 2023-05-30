import { ClientCompanyRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { DeleteClientCompanyController } from "./DeleteClientCompanyController";
import { DeleteClientCompanyUseCase } from "./DeleteClientCompanyUseCase";

const clientCompanyRepository = ClientCompanyRepository.getInstance();
const deleteClientCompanyUseCase = new DeleteClientCompanyUseCase(clientCompanyRepository);
const deleteClientCompanyController = new DeleteClientCompanyController(deleteClientCompanyUseCase);

export { deleteClientCompanyController };
