import { PropertyChargesRepository } from "../../repositories/implementations/PropertyChargesRepository";
import { CreatePropertyChargesController } from "./CreatePropertyChargesController";
import { CreatePropertyChargesUseCase } from "./CreatePropertyChargesUseCase";

const propertyChargesRepository = PropertyChargesRepository.getInstance();

const createPropertyChargesUseCase = new CreatePropertyChargesUseCase(propertyChargesRepository);

const createPropertyChargesController = new CreatePropertyChargesController(createPropertyChargesUseCase);

export { createPropertyChargesController };
