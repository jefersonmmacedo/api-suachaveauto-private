import { Router } from "express";
import { createSearchClientController } from "../../Modules/SearchClient/useCases/createSearchClient";
import { listSearchClientController } from "../../Modules/SearchClient/useCases/listSearchClient";
import { listSearchClientMatchController } from "../../Modules/SearchClient/useCases/listSearchClientMatch";
import { listSearchClientUserController } from "../../Modules/SearchClient/useCases/listSearchClientUser";

const SearchClientRouter = Router();

SearchClientRouter.post("/", (req, res) => {
  return createSearchClientController.handle(req, res);
});

SearchClientRouter.get("/", (req, res) => {
  return listSearchClientController.handle(req, res);
});

SearchClientRouter.get("/:email", (req, res) => {
  return listSearchClientUserController.handle(req, res);
});

SearchClientRouter.get("/match/", (req, res) => {
  return listSearchClientMatchController.handle(req, res);
});



export { SearchClientRouter };
