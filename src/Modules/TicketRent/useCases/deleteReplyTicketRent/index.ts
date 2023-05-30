import { ReplyTicketRentRepository } from "../../repositories/implementations/ReplyTicketRentRepository";
import { DeleteReplyTicketRentController } from "./DeleteReplyTicketRentController";
import { DeleteReplyTicketRentUseCase } from "./DeleteReplyTicketRentUseCase";

const replyTicketRentRepository = ReplyTicketRentRepository.getInstance();
const deleteReplyTicketRentUseCase = new DeleteReplyTicketRentUseCase(replyTicketRentRepository);
const deleteReplyTicketRentController = new DeleteReplyTicketRentController(deleteReplyTicketRentUseCase);

export { deleteReplyTicketRentController };
