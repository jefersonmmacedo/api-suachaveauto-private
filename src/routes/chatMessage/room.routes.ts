import { Router } from "express";
import { createRoomController } from "../../Modules/ChatMessage/useCases/createRoom";
import { listRoomController } from "../../Modules/ChatMessage/useCases/listRoom";
import { listRoomClientController } from "../../Modules/ChatMessage/useCases/listRoomClient";
import { listRoomUserController } from "../../Modules/ChatMessage/useCases/listRoomUser";


const RoomRouter = Router();

RoomRouter.post("/", (req, res) => {
  return createRoomController.handle(req, res);
});
RoomRouter.get("/:idProperty/:idCompany/:idClient", (req, res) => {
  return listRoomController.handle(req, res);
});
RoomRouter.get("/company/:idCompany", (req, res) => {
  return listRoomUserController.handle(req, res);
});
RoomRouter.get("/client/:idClient", (req, res) => {
  return listRoomClientController.handle(req, res);
});



export { RoomRouter };
