import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAllPropertiesUseCase } from "./ListPropertyAllPropertiesUseCase";
import { ListPropertyAllPropertiesController } from "./ListPropertyAllPropertiesController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAllPropertiesUsecase = new ListPropertyAllPropertiesUseCase(propertyRepository);

const listPropertyAllPropertiesController = new ListPropertyAllPropertiesController(listPropertyAllPropertiesUsecase);

export { listPropertyAllPropertiesController };
