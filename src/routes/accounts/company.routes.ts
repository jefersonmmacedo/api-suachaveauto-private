import { Router } from "express";
import { updatePasswordController } from "../../Modules/Company/useCases/updatePassword";
import { createCompanyController } from "../../Modules/Company/useCases/createCompany";
import { listCompanyController } from "../../Modules/Company/useCases/listAccountCompany";
import { listCompanyUnicController } from "../../Modules/Company/useCases/listAccountCompanyUnic";
import { listCompanyEmailController } from "../../Modules/Company/useCases/listAccountCompanyEmail";
import { updateCompanyController } from "../../Modules/Company/useCases/updateAccountCompany";
import { listCompanyAllController } from "../../Modules/Company/useCases/listAccountCompanyAll";
import { listCompanyUnicSlugController } from "../../Modules/Company/useCases/listAccountCompanyUnicSlug";
import { deleteCompanyController } from "../../Modules/Company/useCases/deleteCompany";

const CompanyRouter = Router();

CompanyRouter.post("/", (req, res) => {
  return createCompanyController.handle(req, res);
});

CompanyRouter.get("/all", (req, res) => {
  return listCompanyAllController.handle(req, res);
})

CompanyRouter.get("/:type", (req, res) => {
  return listCompanyController.handle(req, res);
})

CompanyRouter.get("/unic/:id", (req, res) => {
  return listCompanyUnicController.handle(req, res);
})

CompanyRouter.get("/unicSlug/:nameSlug", (req, res) => {
  return listCompanyUnicSlugController.handle(req, res);
})

CompanyRouter.get("/unicEmail/:email", (req, res) => {
  return listCompanyEmailController.handle(req, res);
})

CompanyRouter.patch("/updateAccount/:id", (req, res) => {
  return updateCompanyController.handle(req, res);
})

CompanyRouter.patch("/update/:email", (req, res) => {
  return updatePasswordController.handle(req, res);
})

CompanyRouter.delete("/:id", (req, res) => {
  return deleteCompanyController.handle(req, res);
})


export { CompanyRouter };
