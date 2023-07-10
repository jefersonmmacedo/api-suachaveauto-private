import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { UpdateAutosController } from "./UpdateAutosController";
import { UpdateAutosUseCase } from "./UpdateAutosUseCase";

const autosRepository = AutosRepository.getInstance();

const updateAutosUseCase = new UpdateAutosUseCase(autosRepository);

const updateAutosController = new UpdateAutosController(updateAutosUseCase);

export { updateAutosController };
