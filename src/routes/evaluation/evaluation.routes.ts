import { Router } from "express";
import { createEvaluationController } from "../../Modules/Evaluation/useCases/createEvaluation";
import { listEvaluationController } from "../../Modules/Evaluation/useCases/listAccountEvaluation";
import { listEvaluationAllController } from "../../Modules/Evaluation/useCases/listAccountEvaluationAll";
import { listEvaluationUnicController } from "../../Modules/Evaluation/useCases/listEvaluationUnic";

const EvaluationRoutes = Router();

EvaluationRoutes.post("/", (req, res) => {
  return createEvaluationController.handle(req, res);
});
EvaluationRoutes.get("/company/:idCompany", (req, res) => {
  return listEvaluationController.handle(req, res);
});
EvaluationRoutes.get("/:id", (req, res) => {
  return listEvaluationUnicController.handle(req, res);
});
EvaluationRoutes.get("/lists/:availability/:status", (req, res) => {
  return listEvaluationController.handle(req, res);
});

export { EvaluationRoutes };
