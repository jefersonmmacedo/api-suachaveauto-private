import { Router } from "express";
import { createTicketRentController } from "../../Modules/TicketRent/useCases/createTicketRent";
import { deleteTicketRentController } from "../../Modules/TicketRent/useCases/deleteTicketRent";
import { listTicketRentController } from "../../Modules/TicketRent/useCases/listTicketRent";

const ticketRentRoutes = Router();

ticketRentRoutes.post("/", (req, res) => {
  return createTicketRentController.handle(req, res);
});
ticketRentRoutes.get("/", (req, res) => {
  return listTicketRentController.handle(req, res);
});
ticketRentRoutes.delete("/", (req, res) => {
  return deleteTicketRentController.handle(req, res);
});


export { ticketRentRoutes };


