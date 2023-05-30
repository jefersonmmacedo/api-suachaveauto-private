import { NotificationReadDataRepository } from "../../repositories/implementations/NotificationReadDataRepository";
import { UpdateNotificationsReadDataController } from "./UpdateNotificationsReadDataController";
import { UpdateNotificationsReadDataUseCase } from "./UpdateNotificationsReadDataUseCase";

const notificationsReadDataRepository = NotificationReadDataRepository.getInstance();

const updateNotificationsReadDataUseCase = new UpdateNotificationsReadDataUseCase(notificationsReadDataRepository);

const updateNotificationsReadDataController = new UpdateNotificationsReadDataController(updateNotificationsReadDataUseCase);

export { updateNotificationsReadDataController };
