import { LocatorCompanyRepository } from "../../repositories/implementations/LocatorCompanyRepository";
import { ListLocatorCompanyUnicUseCase } from "./ListLocatorCompanyUnicUseCase";
import { ListLocatorCompanyUnicController } from "./ListLocatorCompanyUnicController";

const locatorCompanyRepository = LocatorCompanyRepository.getInstance();

const listLocatorCompanyUnicUsecase = new ListLocatorCompanyUnicUseCase(locatorCompanyRepository);

const listLocatorCompanyUnicController = new ListLocatorCompanyUnicController(listLocatorCompanyUnicUsecase);

export { listLocatorCompanyUnicController };
