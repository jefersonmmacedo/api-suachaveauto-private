import { ReplyTicketRentRepository } from "../../repositories/implementations/ReplyTicketRentRepository";
import { CreateReplyTicketRentController } from "./CreateReplyTicketRentController";
import { CreateReplyTicketRentUseCase } from "./CreateReplyTicketRentUseCase";

const replyTicketRentRepository = ReplyTicketRentRepository.getInstance();
const createReplyTicketRentUseCase = new CreateReplyTicketRentUseCase(replyTicketRentRepository);
const createReplyTicketRentController = new CreateReplyTicketRentController(createReplyTicketRentUseCase);

export { createReplyTicketRentController };
