import { Router } from "express";
import { createViewAutoController } from "../../Modules/ViewAuto/useCases/createViewAuto";
import { listViewAutoController } from "../../Modules/ViewAuto/useCases/listViewAuto";


const ViewAutoRoutes = Router();

ViewAutoRoutes.post("/", (req, res) => {
  return createViewAutoController.handle(req, res);
});

ViewAutoRoutes.get("/auto/:idAuto", (req, res) => {
  return listViewAutoController.handle(req, res);
});


export { ViewAutoRoutes };
