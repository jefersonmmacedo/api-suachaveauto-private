import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { DeleteAutosController } from "./DeleteAutosController";
import { DeleteAutosUseCase } from "./DeleteAutosUseCase";

const autosRepository = AutosRepository.getInstance();
const deleteAutosUseCase = new DeleteAutosUseCase(autosRepository);
const deleteAutosController = new DeleteAutosController(deleteAutosUseCase);

export { deleteAutosController };
