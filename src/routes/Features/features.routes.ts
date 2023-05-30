import { Router } from "express";
import { createFeaturesController } from "../../Modules/Features/useCases/createFeatures";
import { listFeaturesController } from "../../Modules/Features/useCases/listFeatures";


const FeaturesRouter = Router();

FeaturesRouter.post("/", (req, res) => {
  return createFeaturesController.handle(req, res);
});
FeaturesRouter.get("/", (req, res) => {
  return listFeaturesController.handle(req, res);
});




export { FeaturesRouter };
