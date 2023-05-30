import { Router } from "express";
import { createSchedulingController } from "../../Modules/Scheduling/useCases/createScheduling";
import { listSchedulingController } from "../../Modules/Scheduling/useCases/listScheduling";
import { listSchedulingClientController } from "../../Modules/Scheduling/useCases/listSchedulingClient";
import { listSchedulingUnicController } from "../../Modules/Scheduling/useCases/listSchedulingUnic";
import { listSchedulingUnicCompanyController } from "../../Modules/Scheduling/useCases/listSchedulingUnicCompany";
import { updateSchedulingController } from "../../Modules/Scheduling/useCases/updateScheduling";
import { updateSchedulingStatusController } from "../../Modules/Scheduling/useCases/updateSchedulingStatus";

const SchedulingRouter = Router();

SchedulingRouter.post("/", (req, res) => {
  return createSchedulingController.handle(req, res);
});
SchedulingRouter.get("/", (req, res) => {
  return listSchedulingController.handle(req, res);
});
SchedulingRouter.get("/:id", (req, res) => {
  return listSchedulingUnicController.handle(req, res);
});
SchedulingRouter.get("/client/:idClient", (req, res) => {
  return listSchedulingClientController.handle(req, res);
});
SchedulingRouter.get("/company/:idCompany", (req, res) => {
  return listSchedulingUnicCompanyController.handle(req, res);
});
SchedulingRouter.patch("/date/:id", (req, res) => {
  return updateSchedulingController.handle(req, res);
});
SchedulingRouter.patch("/updateStatus/:id", (req, res) => {
  return updateSchedulingStatusController.handle(req, res);
});


export { SchedulingRouter };
