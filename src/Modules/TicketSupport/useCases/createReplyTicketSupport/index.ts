import { ReplyTicketSupportRepository } from "../../repositories/implementations/ReplyTicketSupportRepository";
import { CreateReplyTicketSupportController } from "./CreateReplyTicketSupportController";
import { CreateReplyTicketSupportUseCase } from "./CreateReplyTicketSupportUseCase";

const replyTicketSupportRepository = ReplyTicketSupportRepository.getInstance();
const createReplyTicketSupportUseCase = new CreateReplyTicketSupportUseCase(replyTicketSupportRepository);
const createReplyTicketSupportController = new CreateReplyTicketSupportController(createReplyTicketSupportUseCase);

export { createReplyTicketSupportController };
