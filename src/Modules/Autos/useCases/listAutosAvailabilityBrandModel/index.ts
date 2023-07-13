import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosAvailabilityBrandModelUseCase } from "./ListAutosAvailabilityBrandModelUseCase";
import { ListAutosAvailabilityBrandModelController } from "./ListAutosAvailabilityBrandModelController";

const autosRepository = AutosRepository.getInstance();

const listAutosAvailabilityBrandModelUsecase = new ListAutosAvailabilityBrandModelUseCase(autosRepository);

const listAutosAvailabilityBrandModelController = new ListAutosAvailabilityBrandModelController(listAutosAvailabilityBrandModelUsecase);

export { listAutosAvailabilityBrandModelController };
