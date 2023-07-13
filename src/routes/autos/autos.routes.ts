import { Router } from "express";
import { createAutosController } from "../../Modules/Autos/useCases/createAutos";
import { deleteAutosController } from "../../Modules/Autos/useCases/deleteAutos";
import { listAutosController } from "../../Modules/Autos/useCases/listAutos";
import { listAutosCompanyController } from "../../Modules/Autos/useCases/listAutosCompany";
import { listAutosTypeController } from "../../Modules/Autos/useCases/listAutosType";
import { listAutosAutoController } from "../../Modules/Autos/useCases/listAutosAuto";
import { listAutosAvailabilityController } from "../../Modules/Autos/useCases/listAutosAvailability";
import { updateAutosController } from "../../Modules/Autos/useCases/updateAutos";
import { updateAutosAvailabilityController } from "../../Modules/Autos/useCases/updateAutosAvailability";
import { listAutosAvailabilityBrandController } from "../../Modules/Autos/useCases/listAutosAvailabilityBrand";
import { listAutosAllController } from "../../Modules/Autos/useCases/listAutosAll";
import { listAutosAvailabilityBrandModelController } from "../../Modules/Autos/useCases/listAutosAvailabilityBrandModel";

const AutosRoutes = Router();

AutosRoutes.post("/", (req, res) => {
  return createAutosController.handle(req, res);
});
AutosRoutes.get("/", (req, res) => {
  return listAutosController.handle(req, res);
});
AutosRoutes.patch("/:id", (req, res) => {
  return updateAutosController.handle(req, res);
});
AutosRoutes.patch("/availability/:id", (req, res) => {
  return updateAutosAvailabilityController.handle(req, res);
});
AutosRoutes.get("/allcars/:availability", (req, res) => {
  return listAutosAvailabilityController.handle(req, res);
});
AutosRoutes.get("/fullData", (req, res) => {
  return listAutosAllController.handle(req, res);
});
AutosRoutes.get("/allBrandcars/:availability", (req, res) => {
  return listAutosAvailabilityBrandController.handle(req, res);
});
AutosRoutes.get("/allBrandModelcars/:availability", (req, res) => {
  return listAutosAvailabilityBrandModelController.handle(req, res);
});
AutosRoutes.get("/typecar/:type", (req, res) => {
  return listAutosTypeController.handle(req, res);
});
AutosRoutes.get("/unicauto/:id", (req, res) => {
  return listAutosAutoController.handle(req, res);
});
AutosRoutes.get("/company/:idCompany", (req, res) => {
  return listAutosCompanyController.handle(req, res);
});
AutosRoutes.delete("/:id", (req, res) => {
  return deleteAutosController.handle(req, res);
});

export { AutosRoutes };
