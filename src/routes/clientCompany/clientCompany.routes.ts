import { Router } from "express";
import { createClientCompanyController } from "../../Modules/ClientCompany/useCases/createClientCompany";
import { listClientCompanyController } from "../../Modules/ClientCompany/useCases/listClientCompany";
import { listClientCompanyAdmController } from "../../Modules/ClientCompany/useCases/listClientCompanyAdm";
import { listClientCompanyEmailController } from "../../Modules/ClientCompany/useCases/listClientCompanyEmail";
import { updateClientCompanyController } from "../../Modules/ClientCompany/useCases/updateClientCompany";
import { listClientCompanyUnicController } from "../../Modules/ClientCompany/useCases/listClientCompanyUnic";
import { deleteClientCompanyController } from "../../Modules/ClientCompany/useCases/deleteClientCompany";


const clientCompanyRoutes = Router();

clientCompanyRoutes.post("/", (req, res) => {
  return createClientCompanyController.handle(req, res);
});
clientCompanyRoutes.get("/", (req, res) => {
  return listClientCompanyController.handle(req, res);
});
clientCompanyRoutes.get("/company/:idCompany", (req, res) => {
  return listClientCompanyAdmController.handle(req, res);
});
clientCompanyRoutes.get("/unic/:id", (req, res) => {
  return listClientCompanyUnicController.handle(req, res);
});
clientCompanyRoutes.get("/email/:email", (req, res) => {
  return listClientCompanyEmailController.handle(req, res);
});
clientCompanyRoutes.patch("/:id", (req, res) => {
  return updateClientCompanyController.handle(req, res);
});
clientCompanyRoutes.delete("/:id", (req, res) => {
  return deleteClientCompanyController.handle(req, res);
});


export { clientCompanyRoutes };
