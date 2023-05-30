import { LocatorCompanyRepository } from "../../repositories/implementations/LocatorCompanyRepository";
import { ListLocatorCompanyEmailUseCase } from "./ListLocatorCompanyEmailUseCase";
import { ListLocatorCompanyEmailController } from "./ListLocatorCompanyEmailController";

const locatorCompanyRepository = LocatorCompanyRepository.getInstance();

const listLocatorCompanyEmailUsecase = new ListLocatorCompanyEmailUseCase(locatorCompanyRepository);

const listLocatorCompanyEmailController = new ListLocatorCompanyEmailController(listLocatorCompanyEmailUsecase);

export { listLocatorCompanyEmailController };
