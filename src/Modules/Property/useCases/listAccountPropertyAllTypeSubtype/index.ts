import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAllTypeSubtypeUseCase } from "./ListPropertyAllTypeSubtypeUseCase";
import { ListPropertyAllTypeSubtypeController } from "./ListPropertyAllTypeSubtypeController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAllTypeSubtypeUsecase = new ListPropertyAllTypeSubtypeUseCase(propertyRepository);

const listPropertyAllTypeSubtypeController = new ListPropertyAllTypeSubtypeController(listPropertyAllTypeSubtypeUsecase);

export { listPropertyAllTypeSubtypeController };
