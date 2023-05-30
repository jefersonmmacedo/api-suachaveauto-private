import { TicketRentRepository } from "../../repositories/implementations/TicketRentRepository";
import { ListTicketRentController } from "./ListTicketRentController";
import { ListTicketRentUseCase } from "./ListTicketRentUseCase";

const ticketRentRepository = TicketRentRepository.getInstance();

const listTicketRentUsecase = new ListTicketRentUseCase(ticketRentRepository);

const listTicketRentController = new ListTicketRentController(listTicketRentUsecase);

export { listTicketRentController };
