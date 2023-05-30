import { TicketSupportRepository } from "../../repositories/implementations/TicketSupportRepository";
import { CreateTicketSupportController } from "./CreateTicketSupportController";
import { CreateTicketSupportUseCase } from "./CreateTicketSupportUseCase";

const ticketSupportRepository = TicketSupportRepository.getInstance();
const createTicketSupportUseCase = new CreateTicketSupportUseCase(ticketSupportRepository);
const createTicketSupportController = new CreateTicketSupportController(createTicketSupportUseCase);

export { createTicketSupportController };
