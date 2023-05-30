import { Router } from "express";
import { createPropertyChargesController } from "../../Modules/PropertyCharges/useCases/createPropertyCharges";
import { updatePaymentPropertyChargesController } from "../../Modules/PropertyCharges/useCases/updatePaymentPropertyCharges";
import { listPaymentPropertyChargesAdmController } from "../../Modules/PropertyCharges/useCases/listPaymentPropertyChargesAdm";
import { listPaymentPropertyChargesLocatorController } from "../../Modules/PropertyCharges/useCases/listPaymentPropertyChargesLocator";

const PropertyChargesRoutes = Router();

PropertyChargesRoutes.post("/", (req, res) => {
  return createPropertyChargesController.handle(req, res);
});
PropertyChargesRoutes.get("/locator/:id", (req, res) => {
  return listPaymentPropertyChargesLocatorController.handle(req, res);
});
PropertyChargesRoutes.get("/company/:id", (req, res) => {
  return listPaymentPropertyChargesAdmController.handle(req, res);
});

PropertyChargesRoutes.patch("/:id", (req, res) => {
  return updatePaymentPropertyChargesController.handle(req, res);
});

export { PropertyChargesRoutes };
