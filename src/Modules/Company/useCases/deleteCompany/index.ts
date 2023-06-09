import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { DeleteCompanyController } from "./DeleteCompanyController";
import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

const companyRepository = CompanyRepository.getInstance();
const deleteCompanyUseCase = new DeleteCompanyUseCase(companyRepository);
const deleteCompanyController = new DeleteCompanyController(deleteCompanyUseCase);

export { deleteCompanyController };
