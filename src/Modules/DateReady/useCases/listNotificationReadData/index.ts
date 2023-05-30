import { NotificationReadDataRepository } from "../../repositories/implementations/NotificationReadDataRepository";
import { ListNotificationReadDataController } from "./ListNotificationReadDataController";
import { ListNotificationReadDataUseCase } from "./ListNotificationReadDataUseCase";

const notificationReadDataRepository = NotificationReadDataRepository.getInstance();

const listNotificationReadDataUsecase = new ListNotificationReadDataUseCase(notificationReadDataRepository);

const listNotificationReadDataController = new ListNotificationReadDataController(listNotificationReadDataUsecase);

export { listNotificationReadDataController };
