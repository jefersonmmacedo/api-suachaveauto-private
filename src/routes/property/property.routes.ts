import { Router } from "express";
import { createPropertyController } from "../../Modules/Property/useCases/createProperty";
import { listPropertyController } from "../../Modules/Property/useCases/listAccountProperty";
import { listPropertyAdressController } from "../../Modules/Property/useCases/listAccountPropertyAdress";
import { listPropertyAdressCityUfController } from "../../Modules/Property/useCases/listAccountPropertyAdressCityUf";
import { listPropertyAdressDistrictController } from "../../Modules/Property/useCases/listAccountPropertyAdressDistrict";
import { listPropertyAdressTypeController } from "../../Modules/Property/useCases/listAccountPropertyAdressType";
import { listPropertyAllController } from "../../Modules/Property/useCases/listAccountPropertyAll";
import { listPropertyAllTypeController } from "../../Modules/Property/useCases/listAccountPropertyAllType";
import { listPropertyAllTypeStatusController } from "../../Modules/Property/useCases/listAccountPropertyAllTypeStatus";
import { listPropertyAllTypeSubtypeController } from "../../Modules/Property/useCases/listAccountPropertyAllTypeSubtype";
import { listPropertyAllTypeSubtypeStatusController } from "../../Modules/Property/useCases/listAccountPropertyAllTypeSubtypeStatus";
import { listPropertyFullDataController } from "../../Modules/Property/useCases/listAccountPropertyFullData";
import { listPropertyFullDataCityUfController } from "../../Modules/Property/useCases/listAccountPropertyFullDataCityUf";
import { listPropertyMatchController } from "../../Modules/Property/useCases/listAccountPropertyMatch";
import { listPropertyCompanyController } from "../../Modules/Property/useCases/listPropertyCompany";
import { listPropertyIntegrationController } from "../../Modules/Property/useCases/listPropertyIntegration";
import { listPropertyLocatorController } from "../../Modules/Property/useCases/listPropertyLocator";
import { listPropertyUnicController } from "../../Modules/Property/useCases/listPropertyUnic";
import { updatePropertyController } from "../../Modules/Property/useCases/updateProperty";
import { updatePropertyAvailabilityController } from "../../Modules/Property/useCases/updatePropertyAvailability";
import { listPropertyAllPropertiesController } from "../../Modules/Property/useCases/listAccountPropertyAllProperties";
import { deletePropertyController } from "../../Modules/Property/useCases/deleteProperty";

const PropertyRoutes = Router();

PropertyRoutes.post("/", (req, res) => {
  return createPropertyController.handle(req, res);
});
PropertyRoutes.get("/all/:availability", (req, res) => {
  return listPropertyAllController.handle(req, res);
});
PropertyRoutes.get("/AllProperties/:availability", (req, res) => {
  return listPropertyAllPropertiesController.handle(req, res);
});
PropertyRoutes.get("/integration/:idCompany", (req, res) => {
  return listPropertyIntegrationController.handle(req, res);
});
PropertyRoutes.get("/company/:idCompany", (req, res) => {
  return listPropertyCompanyController.handle(req, res);
});
PropertyRoutes.get("/locator/:idLocator", (req, res) => {
  return listPropertyLocatorController.handle(req, res);
});
PropertyRoutes.get("/:id", (req, res) => {
  return listPropertyUnicController.handle(req, res);
});
PropertyRoutes.get("/lists/:availability/:status", (req, res) => {
  return listPropertyController.handle(req, res);
});
PropertyRoutes.get("/listsadress/:availability/:status", (req, res) => {
  return listPropertyAdressController.handle(req, res);
});
PropertyRoutes.get("/listsadresstype/:availability/:status", (req, res) => {
  return listPropertyAdressTypeController.handle(req, res);
});
PropertyRoutes.get("/listsadress/:availability/:status", (req, res) => {
  return listPropertyAdressController.handle(req, res);
});
PropertyRoutes.get("/listsadressfull/:availability/:status", (req, res) => {
  return listPropertyFullDataController.handle(req, res);
});
PropertyRoutes.get("/listsadresscityuf/:availability/:status", (req, res) => {
  return listPropertyFullDataCityUfController.handle(req, res);
});
PropertyRoutes.get("/listsadressstatuscomplete/:availability/:status", (req, res) => {
  return listPropertyAdressDistrictController.handle(req, res);
});
PropertyRoutes.get("/listsadressstatus/:availability/:status", (req, res) => {
  return listPropertyAdressCityUfController.handle(req, res);
});
PropertyRoutes.get("/listtype/:availability", (req, res) => {
  return listPropertyAllTypeController.handle(req, res);
});
PropertyRoutes.get("/listtypesubtype/:availability", (req, res) => {
  return listPropertyAllTypeSubtypeController.handle(req, res);
});
PropertyRoutes.get("/listtypesubstatus/:availability/:status", (req, res) => {
  return listPropertyAllTypeSubtypeStatusController.handle(req, res);
});
PropertyRoutes.get("/listtypestatus/:availability/:status", (req, res) => {
  return listPropertyAllTypeStatusController.handle(req, res);
});
PropertyRoutes.get("/list/match/:status", (req, res) => {
  return listPropertyMatchController.handle(req, res);
});
PropertyRoutes.patch("/availability/:id", (req, res) => {
  return updatePropertyAvailabilityController.handle(req, res);
});
PropertyRoutes.patch("/:id", (req, res) => {
  return updatePropertyController.handle(req, res);
});
PropertyRoutes.delete("/:id", (req, res) => {
  return deletePropertyController.handle(req, res);
});

export { PropertyRoutes };
