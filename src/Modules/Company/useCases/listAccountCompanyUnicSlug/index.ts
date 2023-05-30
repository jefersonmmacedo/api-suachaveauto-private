import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyUnicSlugUseCase } from "./ListAccountCompanyUnicSlugUseCase";
import { ListCompanyUnicSlugController } from "./ListAccountCompanyUnicSlugController";

const companyRepository = CompanyRepository.getInstance();

const listCompanyUnicSlugUsecase = new ListCompanyUnicSlugUseCase(companyRepository);

const listCompanyUnicSlugController = new ListCompanyUnicSlugController(listCompanyUnicSlugUsecase);

export { listCompanyUnicSlugController };
