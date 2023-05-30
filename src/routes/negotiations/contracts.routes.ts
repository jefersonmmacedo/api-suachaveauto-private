import { Router } from "express";
import { listContractsClientController } from "../../Modules/Negotiations/useCases/listContractsClient";
import { createContractsController } from "../../Modules/Negotiations/useCases/createContracts";
import { listContractsCompanyController } from "../../Modules/Negotiations/useCases/listContractsCompany";
import { listContractsController } from "../../Modules/Negotiations/useCases/listContracts";
import { listContractsUnicController } from "../../Modules/Negotiations/useCases/listContractsUnic";
import { deleteContractsController } from "../../Modules/Negotiations/useCases/deleteContracts";
import { updateContractController } from "../../Modules/Negotiations/useCases/updateContract";


const contractsRoutes = Router();

contractsRoutes.post("/", (req, res) => {
  return createContractsController.handle(req, res);
});
contractsRoutes.get("/", (req, res) => {
  return listContractsController.handle(req, res);
});
contractsRoutes.get("/:id", (req, res) => {
  return listContractsUnicController.handle(req, res);
});
contractsRoutes.get("/client/:cpfClient", (req, res) => {
  return listContractsClientController.handle(req, res);
});
contractsRoutes.get("/company/:idCompany", (req, res) => {
  return listContractsCompanyController.handle(req, res);
});
contractsRoutes.patch("/:id", (req, res) => {
  return updateContractController.handle(req, res);
});
contractsRoutes.delete("/:id", (req, res) => {
  return deleteContractsController.handle(req, res);
});



export { contractsRoutes };
