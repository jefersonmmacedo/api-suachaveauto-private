import { LocatorCompanyRepository } from "../../../LocatorCompany/repositories/implementations/LocatorCompanyRepository";
import { ListLocatorCompanyUseCase } from "./ListLocatorCompanyUseCase";
import { ListLocatorCompanyController } from "./ListLocatorCompanyController";

const locatorCompanyRepository = LocatorCompanyRepository.getInstance();

const listLocatorCompanyUsecase = new ListLocatorCompanyUseCase(locatorCompanyRepository);

const listLocatorCompanyController = new ListLocatorCompanyController(listLocatorCompanyUsecase);

export { listLocatorCompanyController };
