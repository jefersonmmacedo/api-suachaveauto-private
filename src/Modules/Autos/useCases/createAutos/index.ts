import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { CreateAutosController } from "./CreateAutosController";
import { CreateAutosUseCase } from "./CreateAutosUseCase";

const autosRepository = AutosRepository.getInstance();

const createAutosUseCase = new CreateAutosUseCase(autosRepository);

const createAutosController = new CreateAutosController(createAutosUseCase);

export { createAutosController };
