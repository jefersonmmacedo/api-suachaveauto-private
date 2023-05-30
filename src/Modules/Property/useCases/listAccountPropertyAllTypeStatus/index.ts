import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAllTypeStatusUseCase } from "./ListPropertyAllTypeStatusUseCase";
import { ListPropertyAllTypeStatusController } from "./ListPropertyAllTypeStatusController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAllTypeStatusUsecase = new ListPropertyAllTypeStatusUseCase(propertyRepository);

const listPropertyAllTypeStatusController = new ListPropertyAllTypeStatusController(listPropertyAllTypeStatusUsecase);

export { listPropertyAllTypeStatusController };
