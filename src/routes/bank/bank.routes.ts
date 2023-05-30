import { Router } from "express";
import { createBankController } from "../../Modules/Bank/useCases/CreateBank";
import { listBankController } from "../../Modules/Bank/useCases/listBank";
import { listBankUnicController } from "../../Modules/Bank/useCases/listBankUnic";
import { updateBankController } from "../../Modules/Bank/useCases/updateBank";


const bankRoutes = Router();

bankRoutes.post("/", (req, res) => {
  return createBankController.handle(req, res);
});
bankRoutes.get("/", (req, res) => {
  return listBankController.handle(req, res);
});
bankRoutes.get("/:idCompany", (req, res) => {
  return listBankUnicController.handle(req, res);
});
bankRoutes.patch("/", (req, res) => {
  return updateBankController.handle(req, res);
});


export { bankRoutes };
