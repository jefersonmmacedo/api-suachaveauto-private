import { Router } from "express";
import { createProcessNotesController } from "../../Modules/Negotiations/useCases/createProcessNotes";
import { listProcessNotesController } from "../../Modules/Negotiations/useCases/listProcessNotes";


const processNotesRoutes = Router();

processNotesRoutes.post("/", (req, res) => {
  return createProcessNotesController.handle(req, res);
});
processNotesRoutes.get("/negotiations/:idNegotiations", (req, res) => {
  return listProcessNotesController.handle(req, res);
});



export { processNotesRoutes };
