import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyLocatorUseCase } from "./ListPropertyLocatorUseCase";
import { ListPropertyLocatorController } from "./ListPropertyLocatorController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyLocatorUsecase = new ListPropertyLocatorUseCase(propertyRepository);

const listPropertyLocatorController = new ListPropertyLocatorController(listPropertyLocatorUsecase);

export { listPropertyLocatorController };
