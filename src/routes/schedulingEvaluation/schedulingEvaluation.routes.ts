import { Router } from "express";
import { createSchedulingEvaluationController } from "../../Modules/SchedulingEvaluation/useCases/createSchedulingEvaluation";
import { listSchedulingEvaluationController } from "../../Modules/SchedulingEvaluation/useCases/listSchedulingEvaluation";
import { listSchedulingEvaluationClientController } from "../../Modules/SchedulingEvaluation/useCases/listSchedulingEvaluationClient";
import { listSchedulingEvaluationUnicController } from "../../Modules/SchedulingEvaluation/useCases/listSchedulingEvaluationUnic";
import { listSchedulingEvaluationUnicCompanyController } from "../../Modules/SchedulingEvaluation/useCases/listSchedulingEvaluationUnicCompany";
import { updateSchedulingEvaluationController } from "../../Modules/SchedulingEvaluation/useCases/updateSchedulingEvaluation";

const SchedulingEvaluationRouter = Router();

SchedulingEvaluationRouter.post("/", (req, res) => {
  return createSchedulingEvaluationController.handle(req, res);
});
SchedulingEvaluationRouter.get("/", (req, res) => {
  return listSchedulingEvaluationController.handle(req, res);
});
SchedulingEvaluationRouter.get("/:id", (req, res) => {
  return listSchedulingEvaluationUnicController.handle(req, res);
});
SchedulingEvaluationRouter.get("/client/:idClient", (req, res) => {
  return listSchedulingEvaluationClientController.handle(req, res);
});
SchedulingEvaluationRouter.get("/company/:idCompany", (req, res) => {
  return listSchedulingEvaluationUnicCompanyController.handle(req, res);
});
SchedulingEvaluationRouter.patch("/", (req, res) => {
  return updateSchedulingEvaluationController.handle(req, res);
});


export { SchedulingEvaluationRouter };
