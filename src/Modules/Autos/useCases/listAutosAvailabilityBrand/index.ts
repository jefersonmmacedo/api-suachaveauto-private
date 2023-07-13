import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosAvailabilityBrandUseCase } from "./ListAutosAvailabilityBrandUseCase";
import { ListAutosAvailabilityBrandController } from "./ListAutosAvailabilityBrandController";

const autosRepository = AutosRepository.getInstance();

const listAutosAvailabilityBrandUsecase = new ListAutosAvailabilityBrandUseCase(autosRepository);

const listAutosAvailabilityBrandController = new ListAutosAvailabilityBrandController(listAutosAvailabilityBrandUsecase);

export { listAutosAvailabilityBrandController };
