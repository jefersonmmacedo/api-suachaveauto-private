import { IReplyTicketRentRepository } from "../../repositories/IReplyTicketRentRepository";

class DeleteReplyTicketRentUseCase {
  constructor(private ReplyTicketRentRepository: IReplyTicketRentRepository) {
    ("");
  }

  async execute({id}){

   await this.ReplyTicketRentRepository.delete({id});
  }
}

export { DeleteReplyTicketRentUseCase };
