import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosAvailabilityUseCase } from "./ListAutosAvailabilityUseCase";
import { ListAutosAvailabilityController } from "./ListAutosAvailabilityController";

const autosRepository = AutosRepository.getInstance();

const listAutosAvailabilityUsecase = new ListAutosAvailabilityUseCase(autosRepository);

const listAutosAvailabilityController = new ListAutosAvailabilityController(listAutosAvailabilityUsecase);

export { listAutosAvailabilityController };
