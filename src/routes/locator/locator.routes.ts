import { Router } from "express";
import { createLocatorCompanyController } from "../../Modules/LocatorCompany/useCases/createLocatorCompany";
import { deleteLocatorCompanyController } from "../../Modules/LocatorCompany/useCases/deleteLocatorCompany";
import { listLocatorCompanyController } from "../../Modules/LocatorCompany/useCases/listLocatorCompany";
import { listLocatorCompanyAdmController } from "../../Modules/LocatorCompany/useCases/listLocatorCompanyAdm";
import { listLocatorCompanyEmailController } from "../../Modules/LocatorCompany/useCases/listLocatorCompanyEmail";
import { listLocatorCompanyUnicController } from "../../Modules/LocatorCompany/useCases/listLocatorCompanyUnic";
import { updateLocatorCompanyController } from "../../Modules/LocatorCompany/useCases/updateLocatorCompany";


const LocatorCompanyRoutes = Router();

LocatorCompanyRoutes.post("/", (req, res) => {
  return createLocatorCompanyController.handle(req, res);
});
LocatorCompanyRoutes.get("/", (req, res) => {
  return listLocatorCompanyController.handle(req, res);
});
LocatorCompanyRoutes.get("/company/:idCompany", (req, res) => {
  return listLocatorCompanyAdmController.handle(req, res);
});
LocatorCompanyRoutes.get("/email/:email", (req, res) => {
  return listLocatorCompanyEmailController.handle(req, res);
});
LocatorCompanyRoutes.get("/unic/:id", (req, res) => {
  return listLocatorCompanyUnicController.handle(req, res);
});
LocatorCompanyRoutes.patch("/:id", (req, res) => {
  return updateLocatorCompanyController.handle(req, res);
});
LocatorCompanyRoutes.delete("/:id", (req, res) => {
  return deleteLocatorCompanyController.handle(req, res);
});


export { LocatorCompanyRoutes };
