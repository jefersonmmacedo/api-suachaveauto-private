import { ReplyTicketRentRepository } from "../../repositories/implementations/ReplyTicketRentRepository";
import { ListReplyTicketRentController } from "./ListReplyTicketRentController";
import { ListReplyTicketRentUseCase } from "./ListReplyTicketRentUseCase";

const replyTicketRentRepository = ReplyTicketRentRepository.getInstance();

const listReplyTicketRentUsecase = new ListReplyTicketRentUseCase(replyTicketRentRepository);

const listReplyTicketRentController = new ListReplyTicketRentController(listReplyTicketRentUsecase);

export { listReplyTicketRentController };
