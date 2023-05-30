import { TicketRentRepository } from "../../repositories/implementations/TicketRentRepository";
import { DeleteTicketRentController } from "./DeleteTicketRentController";
import { DeleteTicketRentUseCase } from "./DeleteTicketRentUseCase";

const ticketRentRepository = TicketRentRepository.getInstance();
const deleteTicketRentUseCase = new DeleteTicketRentUseCase(ticketRentRepository);
const deleteTicketRentController = new DeleteTicketRentController(deleteTicketRentUseCase);

export { deleteTicketRentController };
