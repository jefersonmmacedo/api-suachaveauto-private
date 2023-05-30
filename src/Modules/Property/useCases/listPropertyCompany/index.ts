import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyCompanyUseCase } from "./ListPropertyCompanyUseCase";
import { ListPropertyCompanyController } from "./ListPropertyCompanyController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyCompanyUsecase = new ListPropertyCompanyUseCase(propertyRepository);

const listPropertyCompanyController = new ListPropertyCompanyController(listPropertyCompanyUsecase);

export { listPropertyCompanyController };
