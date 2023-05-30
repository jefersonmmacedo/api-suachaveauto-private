import { TicketSupportRepository } from "../../repositories/implementations/TicketSupportRepository";
import { ListTicketSupportController } from "./ListTicketSupportController";
import { ListTicketSupportUseCase } from "./ListTicketSupportUseCase";

const ticketSupportRepository = TicketSupportRepository.getInstance();

const listTicketSupportUsecase = new ListTicketSupportUseCase(ticketSupportRepository);

const listTicketSupportController = new ListTicketSupportController(listTicketSupportUsecase);

export { listTicketSupportController };
