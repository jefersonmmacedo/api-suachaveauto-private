import { Router } from "express";
import { listDeletedCompanyUserController } from "../../Modules/Deleteds/useCases/listDeletedCompanyUser";
import { listDeletedCompanyController } from "../../Modules/Deleteds/useCases/listDeletedCompany";
import { createDeletedCompanyController } from "../../Modules/Deleteds/useCases/createDeletedCompany";


const DeletedsCompanyRouter = Router();

DeletedsCompanyRouter.post("/", (req, res) => {
  return createDeletedCompanyController.handle(req, res);
});

DeletedsCompanyRouter.get("/", (req, res) => {
  return listDeletedCompanyController.handle(req, res);
});

DeletedsCompanyRouter.get("/company/:idCompany", (req, res) => {
  return listDeletedCompanyUserController.handle(req, res);
});



export { DeletedsCompanyRouter };
