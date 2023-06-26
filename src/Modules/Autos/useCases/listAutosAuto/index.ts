import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosAutoUseCase } from "./ListAutosAutoUseCase";
import { ListAutosAutoController } from "./ListAutosAutoController";

const autosRepository = AutosRepository.getInstance();

const listAutosAutoUsecase = new ListAutosAutoUseCase(autosRepository);

const listAutosAutoController = new ListAutosAutoController(listAutosAutoUsecase);

export { listAutosAutoController };
