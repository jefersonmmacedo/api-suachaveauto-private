import { LocatorCompanyRepository } from "../../repositories/implementations/LocatorCompanyRepository";
import { CreateLocatorCompanyController } from "./CreateLocatorCompanyController";
import { CreateLocatorCompanyUseCase } from "./CreateLocatorCompanyUseCase";

const locatorCompanyRepository = LocatorCompanyRepository.getInstance();

const createLocatorCompanyUseCase = new CreateLocatorCompanyUseCase(locatorCompanyRepository);

const createLocatorCompanyController = new CreateLocatorCompanyController(createLocatorCompanyUseCase);

export { createLocatorCompanyController };
