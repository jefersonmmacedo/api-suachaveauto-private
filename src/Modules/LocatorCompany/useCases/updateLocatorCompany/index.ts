import { LocatorCompanyRepository } from "../../repositories/implementations/LocatorCompanyRepository";
import { UpdateLocatorCompanyController } from "./UpdateLocatorCompanyController";
import { UpdateLocatorCompanyUseCase } from "./UpdateLocatorCompanyUseCase";

const locatorCompanyRepository = LocatorCompanyRepository.getInstance();

const updateLocatorCompanyUseCase = new UpdateLocatorCompanyUseCase(locatorCompanyRepository);

const updateLocatorCompanyController = new UpdateLocatorCompanyController(updateLocatorCompanyUseCase);

export { updateLocatorCompanyController };
