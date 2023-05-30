import { Router } from "express";
import { createWaitingListController } from "../../Modules/WaitingList/useCases/createWaitingList";
import { listWaitingListController } from "../../Modules/WaitingList/useCases/listWaitingList";
import { listWaitingListUserController } from "../../Modules/WaitingList/useCases/listWaitingListUser";

const WaitingListRouter = Router();

WaitingListRouter.post("/", (req, res) => {
  return createWaitingListController.handle(req, res);
});

WaitingListRouter.get("/", (req, res) => {
  return listWaitingListController.handle(req, res);
});

WaitingListRouter.get("/:idClient", (req, res) => {
  return listWaitingListUserController.handle(req, res);
});



export { WaitingListRouter };
