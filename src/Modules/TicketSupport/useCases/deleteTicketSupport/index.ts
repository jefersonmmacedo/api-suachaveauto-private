import { TicketSupportRepository } from "../../repositories/implementations/TicketSupportRepository";
import { DeleteTicketSupportController } from "./DeleteTicketSupportController";
import { DeleteTicketSupportUseCase } from "./DeleteTicketSupportUseCase";

const ticketSupportRepository = TicketSupportRepository.getInstance();
const deleteTicketSupportUseCase = new DeleteTicketSupportUseCase(ticketSupportRepository);
const deleteTicketSupportController = new DeleteTicketSupportController(deleteTicketSupportUseCase);

export { deleteTicketSupportController };
