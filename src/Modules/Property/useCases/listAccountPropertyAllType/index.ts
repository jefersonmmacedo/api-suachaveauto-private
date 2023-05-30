import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAllTypeUseCase } from "./ListPropertyAllTypeUseCase";
import { ListPropertyAllTypeController } from "./ListPropertyAllTypeController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAllTypeUsecase = new ListPropertyAllTypeUseCase(propertyRepository);

const listPropertyAllTypeController = new ListPropertyAllTypeController(listPropertyAllTypeUsecase);

export { listPropertyAllTypeController };
