import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAllTypeSubtypeStatusUseCase } from "./ListPropertyAllTypeSubtypeStatusUseCase";
import { ListPropertyAllTypeSubtypeStatusController } from "./ListPropertyAllTypeSubtypeStatusController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAllTypeSubtypeStatusUsecase = new ListPropertyAllTypeSubtypeStatusUseCase(propertyRepository);

const listPropertyAllTypeSubtypeStatusController = new ListPropertyAllTypeSubtypeStatusController(listPropertyAllTypeSubtypeStatusUsecase);

export { listPropertyAllTypeSubtypeStatusController };
