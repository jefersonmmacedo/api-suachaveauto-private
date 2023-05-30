import { LocatorCompanyRepository } from "../../repositories/implementations/LocatorCompanyRepository";
import { ListLocatorCompanyAdmUseCase } from "./ListLocatorCompanyAdmUseCase";
import { ListLocatorCompanyAdmController } from "./ListLocatorCompanyAdmController";

const locatorCompanyAdmRepository = LocatorCompanyRepository.getInstance();

const listLocatorCompanyAdmUsecase = new ListLocatorCompanyAdmUseCase(locatorCompanyAdmRepository);

const listLocatorCompanyAdmController = new ListLocatorCompanyAdmController(listLocatorCompanyAdmUsecase);

export { listLocatorCompanyAdmController };
