import { IReplyTicketSupportRepository } from "../../repositories/IReplyTicketSupportRepository";

class DeleteReplyTicketSupportUseCase {
  constructor(private ReplyTicketSupportRepository: IReplyTicketSupportRepository) {
    ("");
  }

  async execute({id}){

   await this.ReplyTicketSupportRepository.delete({id});
  }
}

export { DeleteReplyTicketSupportUseCase };
