import { AlertClientRepository } from "../../repositories/implementations/AlertClientRepository";
import { ListAlertClientMatchController } from "./ListAlertClientMatchController";
import { ListAlertClientMatchUseCase } from "./ListAlertClientMatchUseCase";

const alertClientRepository = AlertClientRepository.getInstance();

const listAlertClientMatchUsecase = new ListAlertClientMatchUseCase(alertClientRepository);

const listAlertClientMatchController = new ListAlertClientMatchController(listAlertClientMatchUsecase);

export { listAlertClientMatchController };
