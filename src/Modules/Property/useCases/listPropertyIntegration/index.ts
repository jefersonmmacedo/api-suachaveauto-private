import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyIntegrationUseCase } from "./ListPropertyIntegrationUseCase";
import { ListPropertyIntegrationController } from "./ListPropertyIntegrationController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyIntegrationUsecase = new ListPropertyIntegrationUseCase(propertyRepository);

const listPropertyIntegrationController = new ListPropertyIntegrationController(listPropertyIntegrationUsecase);

export { listPropertyIntegrationController };
