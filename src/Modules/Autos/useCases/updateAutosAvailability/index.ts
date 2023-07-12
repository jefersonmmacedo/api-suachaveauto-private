import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { UpdateAutosAvailabilityController } from "./UpdateAutosAvailabilityController";
import { UpdateAutosAvailabilityUseCase } from "./UpdateAutosAvailabilityUseCase";

const autosRepository = AutosRepository.getInstance();

const updateAutosAvailabilityUseCase = new UpdateAutosAvailabilityUseCase(autosRepository);

const updateAutosAvailabilityController = new UpdateAutosAvailabilityController(updateAutosAvailabilityUseCase);

export { updateAutosAvailabilityController };
