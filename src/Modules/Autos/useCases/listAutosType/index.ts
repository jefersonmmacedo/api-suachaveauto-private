import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosTypeUseCase } from "./ListAutosTypeUseCase";
import { ListAutosTypeController } from "./ListAutosTypeController";

const autosRepository = AutosRepository.getInstance();

const listAutosTypeUsecase = new ListAutosTypeUseCase(autosRepository);

const listAutosTypeController = new ListAutosTypeController(listAutosTypeUsecase);

export { listAutosTypeController };
