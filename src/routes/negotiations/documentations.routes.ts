import { Router } from "express";
import { createDocumentationsController } from "../../Modules/Negotiations/useCases/createDocumentations";
import { listDocumentationsController } from "../../Modules/Negotiations/useCases/listDocumentations";


const documentationsRoutes = Router();

documentationsRoutes.post("/", (req, res) => {
  return createDocumentationsController.handle(req, res);
});
documentationsRoutes.get("/negotiations/:idNegotiations", (req, res) => {
  return listDocumentationsController.handle(req, res);
});



export { documentationsRoutes };
