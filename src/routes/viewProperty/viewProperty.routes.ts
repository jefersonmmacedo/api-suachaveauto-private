import { Router } from "express";
import { createViewPropertyController } from "../../Modules/ViewProperty/useCases/createViewProperty";
import { listViewPropertyController } from "../../Modules/ViewProperty/useCases/listViewProperty";

const ViewPropertyRoutes = Router();

ViewPropertyRoutes.post("/", (req, res) => {
  return createViewPropertyController.handle(req, res);
});

ViewPropertyRoutes.get("/property/:idProperty", (req, res) => {
  return listViewPropertyController.handle(req, res);
});


export { ViewPropertyRoutes };
