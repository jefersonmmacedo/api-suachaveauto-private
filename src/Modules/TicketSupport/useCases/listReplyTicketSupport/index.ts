import { ReplyTicketSupportRepository } from "../../repositories/implementations/ReplyTicketSupportRepository";
import { ListReplyTicketSupportController } from "./ListReplyTicketSupportController";
import { ListReplyTicketSupportUseCase } from "./ListReplyTicketSupportUseCase";

const replyTicketSupportRepository = ReplyTicketSupportRepository.getInstance();

const listReplyTicketSupportUsecase = new ListReplyTicketSupportUseCase(replyTicketSupportRepository);

const listReplyTicketSupportController = new ListReplyTicketSupportController(listReplyTicketSupportUsecase);

export { listReplyTicketSupportController };
