import { Router } from "express";
import { createNotificationController } from "../../Modules/Notification/useCases/createINotification";
import { findNotificationController } from "../../Modules/Notification/useCases/findNotification";

const notificationsRoutes = Router();

notificationsRoutes.post("/", (req, res) => {
  return createNotificationController.handle(req, res);
});
notificationsRoutes.get("/:idAccount", (req, res) => {
  return findNotificationController.handle(req, res);
});


export { notificationsRoutes };
