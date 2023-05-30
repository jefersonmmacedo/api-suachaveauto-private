import { LocatorCompanyRepository } from "../../repositories/implementations/LocatorCompanyRepository";
import { DeleteLocatorCompanyController } from "./DeleteLocatorCompanyController";
import { DeleteLocatorCompanyUseCase } from "./DeleteLocatorCompanyUseCase";

const locatorCompanyRepository = LocatorCompanyRepository.getInstance();
const deleteLocatorCompanyUseCase = new DeleteLocatorCompanyUseCase(locatorCompanyRepository);
const deleteLocatorCompanyController = new DeleteLocatorCompanyController(deleteLocatorCompanyUseCase);

export { deleteLocatorCompanyController };
