import { AutosRepository } from "../../../Autos/repositories/implementations/AutosRepository";
import { ListAutosUseCase } from "./ListAutosUseCase";
import { ListAutosController } from "./ListAutosController";

const autosRepository = AutosRepository.getInstance();

const listAutosUsecase = new ListAutosUseCase(autosRepository);

const listAutosController = new ListAutosController(listAutosUsecase);

export { listAutosController };
