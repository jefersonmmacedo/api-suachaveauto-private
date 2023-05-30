import { NotificationReadDataRepository } from "../../repositories/implementations/NotificationReadDataRepository";
import { CreateNotificationReadDataController } from "./CreateNotificationReadDataController";
import { CreateNotificationReadDataUseCase } from "./CreateNotificationReadDataUseCase";

const notificationReadDataRepository = NotificationReadDataRepository.getInstance();

const createNotificationReadDataUseCase = new CreateNotificationReadDataUseCase(notificationReadDataRepository);

const createNotificationReadDataController = new CreateNotificationReadDataController(createNotificationReadDataUseCase);

export { createNotificationReadDataController };
