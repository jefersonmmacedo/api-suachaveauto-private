import { Router } from "express";
import { createDeletedClientController } from "../../Modules/Deleteds/useCases/createDeletedClient";
import { listDeletedClientController } from "../../Modules/Deleteds/useCases/listDeletedClient";
import { listDeletedClientUserController } from "../../Modules/Deleteds/useCases/listDeletedClientUser";


const DeletedsClientRouter = Router();

DeletedsClientRouter.post("/", (req, res) => {
  return createDeletedClientController.handle(req, res);
});

DeletedsClientRouter.get("/", (req, res) => {
  return listDeletedClientController.handle(req, res);
});

DeletedsClientRouter.get("/client/:idClient", (req, res) => {
  return listDeletedClientUserController.handle(req, res);
});



export { DeletedsClientRouter };
