import { TicketRentRepository } from "../../repositories/implementations/TicketRentRepository";
import { CreateTicketRentController } from "./CreateTicketRentController";
import { CreateTicketRentUseCase } from "./CreateTicketRentUseCase";

const ticketRentRepository = TicketRentRepository.getInstance();
const createTicketRentUseCase = new CreateTicketRentUseCase(ticketRentRepository);
const createTicketRentController = new CreateTicketRentController(createTicketRentUseCase);

export { createTicketRentController };
