import { Router } from "express";
import { createFinancerController } from "../../Modules/Financer/useCases/createFinancer";
import { listFinancerController } from "../../Modules/Financer/useCases/listFinancer";
import { listFinancerUserController } from "../../Modules/Financer/useCases/listFinancerUser";
import { updateFinancerController } from "../../Modules/Financer/useCases/updateFinancer";
import { listFinancerUnicController } from "../../Modules/Financer/useCases/listFinancerUnic";

const financerRoutes = Router();

financerRoutes.post("/", (req, res) => {
  return createFinancerController.handle(req, res);
});
financerRoutes.get("/", (req, res) => {
  return listFinancerController.handle(req, res);
});
financerRoutes.get("/unic/:id", (req, res) => {
  return listFinancerUnicController.handle(req, res);
});
financerRoutes.get("/company/:idCompany", (req, res) => {
  return listFinancerUserController.handle(req, res);
});
financerRoutes.patch("/:id", (req, res) => {
  return updateFinancerController.handle(req, res);
});


export { financerRoutes };
