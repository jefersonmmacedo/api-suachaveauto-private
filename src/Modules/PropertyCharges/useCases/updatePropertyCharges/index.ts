import { PropertyChargesRepository } from "../../repositories/implementations/PropertyChargesRepository";
import { UpdatePropertyChargesController } from "./UpdatePropertyChargesController";
import { UpdatePropertyChargesUseCase } from "./UpdatePropertyChargesUseCase";

const propertyChargesRepository = PropertyChargesRepository.getInstance();

const updatePropertyChargesUseCase = new UpdatePropertyChargesUseCase(propertyChargesRepository);

const updatePropertyChargesController = new UpdatePropertyChargesController(updatePropertyChargesUseCase);

export { updatePropertyChargesController };
