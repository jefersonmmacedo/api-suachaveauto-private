import { Router } from "express";
import { createProposalsController } from "../../Modules/Proposals/useCases/createProposals";
import { listProposalsController } from "../../Modules/Proposals/useCases/listProposals";
import { listProposalsUserController } from "../../Modules/Proposals/useCases/listProposalsUser";


const ProposalsRouter = Router();

ProposalsRouter.post("/", (req, res) => {
  return createProposalsController.handle(req, res);
});
ProposalsRouter.get("/", (req, res) => {
  return listProposalsController.handle(req, res);
});
ProposalsRouter.get("/company/:idCompany", (req, res) => {
  return listProposalsUserController.handle(req, res);
});



export { ProposalsRouter };
