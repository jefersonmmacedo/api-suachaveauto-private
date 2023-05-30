import { Router } from "express";
import { createReplyTicketRentController } from "../../Modules/TicketRent/useCases/createReplyTicketRent";
import { deleteReplyTicketRentController } from "../../Modules/TicketRent/useCases/deleteReplyTicketRent";
import { listReplyTicketRentController } from "../../Modules/TicketRent/useCases/listReplyTicketRent";


const replyTicketRentRoutes = Router();

replyTicketRentRoutes.post("/", (req, res) => {
  return createReplyTicketRentController.handle(req, res);
});
replyTicketRentRoutes.get("/", (req, res) => {
  return listReplyTicketRentController.handle(req, res);
});
replyTicketRentRoutes.delete("/", (req, res) => {
  return deleteReplyTicketRentController.handle(req, res);
});

export { replyTicketRentRoutes };


