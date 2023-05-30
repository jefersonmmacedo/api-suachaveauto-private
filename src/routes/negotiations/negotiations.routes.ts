import { Router } from "express";
import { createNegotiationsController } from "../../Modules/Negotiations/useCases/createNegotiations";
import { listNegotiationsController } from "../../Modules/Negotiations/useCases/listNegotiations";
import { listNegotiationsClientController } from "../../Modules/Negotiations/useCases/listNegotiationsClient";
import { listNegotiationsCompanyController } from "../../Modules/Negotiations/useCases/listNegotiationsCompany";
import { listNegotiationsUnicController } from "../../Modules/Negotiations/useCases/listNegotiationsUnic";



const negotiationsRoutes = Router();

negotiationsRoutes.post("/", (req, res) => {
  return createNegotiationsController.handle(req, res);
});
negotiationsRoutes.get("/unic/:id", (req, res) => {
  return listNegotiationsController.handle(req, res);
});
negotiationsRoutes.get("/company/:idCompany", (req, res) => {
  return listNegotiationsCompanyController.handle(req, res);
});
negotiationsRoutes.get("/client/:idClient", (req, res) => {
  return listNegotiationsClientController.handle(req, res);
});


export { negotiationsRoutes };
