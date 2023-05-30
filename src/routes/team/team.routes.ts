import { Router } from "express";
import { createTeamController } from "../../Modules/Team/useCases/createTeam";
import { listTeamController } from "../../Modules/Team/useCases/listAccountTeam";
import { listTeamUnicController } from "../../Modules/Team/useCases/listTeamUnic";
import { updateTeamController } from "../../Modules/Team/useCases/updateTeam";

const TeamRouter = Router();

TeamRouter.post("/", (req, res) => {
  return createTeamController.handle(req, res);
});

TeamRouter.post("/", (req, res) => {
  return listTeamController.handle(req, res);
});

TeamRouter.post("/:id", (req, res) => {
  return listTeamUnicController.handle(req, res);
});

TeamRouter.patch("/", (req, res) => {
  return updateTeamController.handle(req, res);
});



export { TeamRouter };
