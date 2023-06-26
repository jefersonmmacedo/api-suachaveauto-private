import { Router } from "express";
import { createLicensingController } from "../../Modules/Licensing/useCases/createLicensing";
import { listLicensingController } from "../../Modules/Licensing/useCases/listLicensing";


const LicensingRouter = Router();

LicensingRouter.post("/", (req, res) => {
  return createLicensingController.handle(req, res);
});
LicensingRouter.get("/", (req, res) => {
  return listLicensingController.handle(req, res);
});




export { LicensingRouter };
