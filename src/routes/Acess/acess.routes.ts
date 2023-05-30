import { Router } from "express";
import { createAccessController } from "../../Modules/Access/useCases/createAccess";
import { listAccessController } from "../../Modules/Access/useCases/listAccess";
import { listAccessUserController } from "../../Modules/Access/useCases/listAccessUser";


const AcessRouter = Router();

AcessRouter.post("/", (req, res) => {
  return createAccessController.handle(req, res);
});
AcessRouter.get("/", (req, res) => {
  return listAccessController.handle(req, res);
});
AcessRouter.get("/company/:idCompany", (req, res) => {
  return listAccessUserController.handle(req, res);
});



export { AcessRouter };
