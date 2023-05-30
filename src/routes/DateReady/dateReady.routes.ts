import { Router } from "express";
import { createMessageReadDataController } from "../../Modules/DateReady/useCases/createMessageReadData";
import { createNotificationReadDataController } from "../../Modules/DateReady/useCases/createNotificationReadData";
import { createRoomReadDataController } from "../../Modules/DateReady/useCases/createRoomReadData";
import { listMessageReadDataController } from "../../Modules/DateReady/useCases/listMessageReadData";
import { listNotificationReadDataController } from "../../Modules/DateReady/useCases/listNotificationReadData";
import { listRoomReadDataController } from "../../Modules/DateReady/useCases/listRoomReadData";
import { updateMessageReadDataController } from "../../Modules/DateReady/useCases/updateMessageReadData";
import { updateNotificationsReadDataController } from "../../Modules/DateReady/useCases/updateNotificationsReadData";
import { updateRoomReadDataController } from "../../Modules/DateReady/useCases/updateRoomReadData";


const DateReadyRouter = Router();

DateReadyRouter.post("/messages", (req, res) => {
  return createMessageReadDataController.handle(req, res);
});
DateReadyRouter.get("/messages/user/:idUser", (req, res) => {
  return listMessageReadDataController.handle(req, res);
});
DateReadyRouter.patch("/messages/update/:id", (req, res) => {
  return updateMessageReadDataController.handle(req, res);
});


DateReadyRouter.post("/rooms", (req, res) => {
  return createRoomReadDataController.handle(req, res);
});
DateReadyRouter.get("/rooms/user/:idRoom/:idUser", (req, res) => {
  return listRoomReadDataController.handle(req, res);
});
DateReadyRouter.patch("/rooms/update/:id", (req, res) => {
  return updateRoomReadDataController.handle(req, res);
});



DateReadyRouter.post("/notifications", (req, res) => {
  return createNotificationReadDataController.handle(req, res);
});
DateReadyRouter.get("/notifications/user/:idUser", (req, res) => {
  return listNotificationReadDataController.handle(req, res);
});
DateReadyRouter.patch("/notifications/update/:id", (req, res) => {
  return updateNotificationsReadDataController.handle(req, res);
});




export { DateReadyRouter };