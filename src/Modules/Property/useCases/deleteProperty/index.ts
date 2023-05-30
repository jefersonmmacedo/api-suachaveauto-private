import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { DeletePropertyController } from "./DeletePropertyController";
import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

const propertyRepository = PropertyRepository.getInstance();
const deletePropertyUseCase = new DeletePropertyUseCase(propertyRepository);
const deletePropertyController = new DeletePropertyController(deletePropertyUseCase);

export { deletePropertyController };
