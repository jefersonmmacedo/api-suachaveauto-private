import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyAllUseCase } from "./ListAccountCompanyAllUseCase";
import { ListCompanyAllController } from "./ListAccountCompanyAllController";

const companyRepository = CompanyRepository.getInstance();

const listCompanyAllUsecase = new ListCompanyAllUseCase(companyRepository);

const listCompanyAllController = new ListCompanyAllController(listCompanyAllUsecase);

export { listCompanyAllController };
