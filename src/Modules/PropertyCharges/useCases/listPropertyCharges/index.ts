import { PropertyChargesRepository } from "../../../PropertyCharges/repositories/implementations/PropertyChargesRepository";
import { ListPropertyChargesUseCase } from "./ListPropertyChargesUseCase";
import { ListPropertyChargesController } from "./ListPropertyChargesController";

const propertyChargesRepository = PropertyChargesRepository.getInstance();

const listPropertyChargesUsecase = new ListPropertyChargesUseCase(propertyChargesRepository);

const listPropertyChargesController = new ListPropertyChargesController(listPropertyChargesUsecase);

export { listPropertyChargesController };
