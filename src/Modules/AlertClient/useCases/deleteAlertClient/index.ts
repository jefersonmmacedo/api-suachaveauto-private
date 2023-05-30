import { AlertClientRepository } from "../../repositories/implementations/AlertClientRepository";
import { DeleteAlertClientController } from "./DeleteAlertClientController";
import { DeleteAlertClientUseCase } from "./DeleteAlertClientUseCase";

const alertClientRepository = AlertClientRepository.getInstance();
const deleteAlertClientUseCase = new DeleteAlertClientUseCase(alertClientRepository);
const deleteAlertClientController = new DeleteAlertClientController(deleteAlertClientUseCase);

export { deleteAlertClientController };
