import { ITicketRentRepository } from "../../repositories/ITicketRentRepository";

class DeleteTicketRentUseCase {
  constructor(private TicketRentRepository: ITicketRentRepository) {
    ("");
  }

  async execute({id}){

   await this.TicketRentRepository.delete({id});
  }
}

export { DeleteTicketRentUseCase };
