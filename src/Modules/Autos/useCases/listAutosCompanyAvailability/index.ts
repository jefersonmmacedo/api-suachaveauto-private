import { AutosRepository } from "../../repositories/implementations/AutosRepository";
import { ListAutosCompanyAvailabilityUseCase } from "./ListAutosCompanyAvailabilityUseCase";
import { ListAutosCompanyAvailabilityController } from "./ListAutosCompanyAvailabilityController";

const autosRepository = AutosRepository.getInstance();

const listAutosCompanyAvailabilityUsecase = new ListAutosCompanyAvailabilityUseCase(autosRepository);

const listAutosCompanyAvailabilityController = new ListAutosCompanyAvailabilityController(listAutosCompanyAvailabilityUsecase);

export { listAutosCompanyAvailabilityController };
