import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosAllUseCase } from "./ListAutosAllUseCase";
import { ListAutosAllController } from "./ListAutosAllController";

const autosRepository = AutosRepository.getInstance();

const listAutosAllUsecase = new ListAutosAllUseCase(autosRepository);

const listAutosAllController = new ListAutosAllController(listAutosAllUsecase);

export { listAutosAllController };
