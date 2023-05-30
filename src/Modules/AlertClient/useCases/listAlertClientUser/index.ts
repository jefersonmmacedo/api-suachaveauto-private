import { AlertClientRepository } from "../../repositories/implementations/AlertClientRepository";
import { ListAlertClientUserController } from "./ListAlertClientUserController";
import { ListAlertClientUserUseCase } from "./ListAlertClientUserUseCase";

const alertClientRepository = AlertClientRepository.getInstance();

const listAlertClientUserUsecase = new ListAlertClientUserUseCase(alertClientRepository);

const listAlertClientUserController = new ListAlertClientUserController(listAlertClientUserUsecase);

export { listAlertClientUserController };
