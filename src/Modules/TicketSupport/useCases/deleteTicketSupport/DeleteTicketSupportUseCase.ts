import { ITicketSupportRepository } from "../../repositories/ITicketSupportRepository";

class DeleteTicketSupportUseCase {
  constructor(private TicketSupportRepository: ITicketSupportRepository) {
    ("");
  }

  async execute({id}){

   await this.TicketSupportRepository.delete({id});
  }
}

export { DeleteTicketSupportUseCase };
