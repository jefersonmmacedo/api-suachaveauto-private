import { Router } from "express";
import { createWebSiteClientController } from "../../Modules/SolicitationWebApp/useCases/createWebSiteClient";
import { listWebSiteClientController } from "../../Modules/SolicitationWebApp/useCases/listWebSiteClient";
import { listWebSiteClientCompanyController } from "../../Modules/SolicitationWebApp/useCases/listWebSiteClientCompany";



const WebSiteClientRouter = Router();

WebSiteClientRouter.post("/", (req, res) => {
  return createWebSiteClientController.handle(req, res);
});

WebSiteClientRouter.get("/", (req, res) => {
  return listWebSiteClientController.handle(req, res);
});

WebSiteClientRouter.get("/company/:idCompany", (req, res) => {
  return listWebSiteClientCompanyController.handle(req, res);
});



export { WebSiteClientRouter };
