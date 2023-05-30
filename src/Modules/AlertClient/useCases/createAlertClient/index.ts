import { AlertClientRepository } from "../../repositories/implementations/AlertClientRepository";
import { CreateAlertClientController } from "./CreateAlertClientController";
import { CreateAlertClientUseCase } from "./CreateAlertClientUseCase";

const alertClientRepository = AlertClientRepository.getInstance();

const createAlertClientUseCase = new CreateAlertClientUseCase(alertClientRepository);

const createAlertClientController = new CreateAlertClientController(createAlertClientUseCase);

export { createAlertClientController };
