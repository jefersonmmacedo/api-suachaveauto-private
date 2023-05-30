import { Router } from "express";
import { createGuarantorCompanyController } from "../../Modules/GuarantorCompany/useCases/createGuarantorCompany";
import { deleteGuarantorCompanyController } from "../../Modules/GuarantorCompany/useCases/deleteGuarantorCompany";
import { listGuarantorCompanyController } from "../../Modules/GuarantorCompany/useCases/listGuarantorCompany";
import { listGuarantorCompanyAdmController } from "../../Modules/GuarantorCompany/useCases/listGuarantorCompanyAdm";
import { listGuarantorCompanyEmailController } from "../../Modules/GuarantorCompany/useCases/listGuarantorCompanyEmail";
import { listGuarantorCompanyUnicController } from "../../Modules/GuarantorCompany/useCases/listGuarantorCompanyUnic";
import { updateGuarantorCompanyController } from "../../Modules/GuarantorCompany/useCases/updateGuarantorCompany";


const guarantorCompanyRoutes = Router();

guarantorCompanyRoutes.post("/", (req, res) => {
  return createGuarantorCompanyController.handle(req, res);
});
guarantorCompanyRoutes.get("/", (req, res) => {
  return listGuarantorCompanyController.handle(req, res);
});
guarantorCompanyRoutes.get("/company/:idCompany", (req, res) => {
  return listGuarantorCompanyAdmController.handle(req, res);
});
guarantorCompanyRoutes.get("/email/:email", (req, res) => {
  return listGuarantorCompanyEmailController.handle(req, res);
});
guarantorCompanyRoutes.get("/unic/:id", (req, res) => {
  return listGuarantorCompanyUnicController.handle(req, res);
});
guarantorCompanyRoutes.patch("/:id", (req, res) => {
  return updateGuarantorCompanyController.handle(req, res);
});
guarantorCompanyRoutes.delete("/:id", (req, res) => {
  return deleteGuarantorCompanyController.handle(req, res);
});


export { guarantorCompanyRoutes };
