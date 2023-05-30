import { PropertyChargesRepository } from "../../repositories/implementations/PropertyChargesRepository";
import { ListPropertyChargesLocatorUseCase } from "./ListPropertyChargesLocatorUseCase";
import { ListPropertyChargesLocatorController } from "./ListPropertyChargesLocatorController";

const propertyChargesRepository = PropertyChargesRepository.getInstance();

const listPropertyChargesLocatorUsecase = new ListPropertyChargesLocatorUseCase(propertyChargesRepository);

const listPropertyChargesLocatorController = new ListPropertyChargesLocatorController(listPropertyChargesLocatorUsecase);

export { listPropertyChargesLocatorController };
