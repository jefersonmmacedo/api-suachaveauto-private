import { Router } from "express";
import { createAlertClientController } from "../../Modules/AlertClient/useCases/createAlertClient";
import { listAlertClientController } from "../../Modules/AlertClient/useCases/listAlertClient";
import { listAlertClientMatchController } from "../../Modules/AlertClient/useCases/listAlertClientMatch";
import { listAlertClientUserController } from "../../Modules/AlertClient/useCases/listAlertClientUser";

const AlertClientRouter = Router();

AlertClientRouter.post("/", (req, res) => {
  return createAlertClientController.handle(req, res);
});

AlertClientRouter.get("/autos/:idAuto", (req, res) => {
  return listAlertClientController.handle(req, res);
});

AlertClientRouter.get("/:email", (req, res) => {
  return listAlertClientUserController.handle(req, res);
});

AlertClientRouter.get("/", (req, res) => {
  return listAlertClientMatchController.handle(req, res);
});



export { AlertClientRouter };
