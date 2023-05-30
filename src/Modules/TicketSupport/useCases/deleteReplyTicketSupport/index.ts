import { ReplyTicketSupportRepository } from "../../repositories/implementations/ReplyTicketSupportRepository";
import { DeleteReplyTicketSupportController } from "./DeleteReplyTicketSupportController";
import { DeleteReplyTicketSupportUseCase } from "./DeleteReplyTicketSupportUseCase";

const replyTicketSupportRepository = ReplyTicketSupportRepository.getInstance();
const deleteReplyTicketSupportUseCase = new DeleteReplyTicketSupportUseCase(replyTicketSupportRepository);
const deleteReplyTicketSupportController = new DeleteReplyTicketSupportController(deleteReplyTicketSupportUseCase);

export { deleteReplyTicketSupportController };
