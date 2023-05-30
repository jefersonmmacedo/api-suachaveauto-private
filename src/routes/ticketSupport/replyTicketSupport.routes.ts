import { Router } from "express";
import { createReplyTicketSupportController } from "../../Modules/TicketSupport/useCases/createReplyTicketSupport";
import { deleteReplyTicketSupportController } from "../../Modules/TicketSupport/useCases/deleteReplyTicketSupport";
import { listReplyTicketSupportController } from "../../Modules/TicketSupport/useCases/listReplyTicketSupport";


const replyTicketSupportRoutes = Router();

replyTicketSupportRoutes.post("/", (req, res) => {
  return createReplyTicketSupportController.handle(req, res);
});
replyTicketSupportRoutes.get("/", (req, res) => {
  return listReplyTicketSupportController.handle(req, res);
});
replyTicketSupportRoutes.delete("/", (req, res) => {
  return deleteReplyTicketSupportController.handle(req, res);
});

export { replyTicketSupportRoutes };


