import { AlertClientRepository } from "../../repositories/implementations/AlertClientRepository";
import { ListAlertClientController } from "./ListAlertClientController";
import { ListAlertClientUseCase } from "./ListAlertClientUseCase";

const alertClientRepository = AlertClientRepository.getInstance();

const listAlertClientUsecase = new ListAlertClientUseCase(alertClientRepository);

const listAlertClientController = new ListAlertClientController(listAlertClientUsecase);

export { listAlertClientController };
