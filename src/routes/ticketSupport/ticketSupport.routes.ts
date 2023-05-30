import { Router } from "express";
import { createTicketSupportController } from "../../Modules/TicketSupport/useCases/createTicketSupport";
import { deleteTicketSupportController } from "../../Modules/TicketSupport/useCases/deleteTicketSupport";
import { listTicketSupportController } from "../../Modules/TicketSupport/useCases/listTicketSupport";

const ticketSupportRoutes = Router();

ticketSupportRoutes.post("/", (req, res) => {
  return createTicketSupportController.handle(req, res);
});
ticketSupportRoutes.get("/", (req, res) => {
  return listTicketSupportController.handle(req, res);
});
ticketSupportRoutes.delete("/", (req, res) => {
  return deleteTicketSupportController.handle(req, res);
});


export { ticketSupportRoutes };


