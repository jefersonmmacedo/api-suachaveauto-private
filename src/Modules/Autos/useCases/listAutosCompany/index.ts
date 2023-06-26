import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosCompanyUseCase } from "./ListAutosCompanyUseCase";
import { ListAutosCompanyController } from "./ListAutosCompanyController";

const autosRepository = AutosRepository.getInstance();

const listAutosCompanyUsecase = new ListAutosCompanyUseCase(autosRepository);

const listAutosCompanyController = new ListAutosCompanyController(listAutosCompanyUsecase);

export { listAutosCompanyController };
