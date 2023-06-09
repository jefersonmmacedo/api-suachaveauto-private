import { ReplyTicketRentRepository } from "../../repositories/implementations/ReplyTicketRentRepository";


interface IRequest {
  id: string;
  idTicket: string;
  IdClient: string;
  idCompany: string;
  idAuto:string;
  message: string;
  imagesProperty: object;
}

class CreateReplyTicketRentUseCase {
  constructor(private ReplyTicketRentRepository: ReplyTicketRentRepository) {
    ("");
  }

  async execute({
    id, idTicket, IdClient, idCompany, idAuto,message, imagesProperty
  }: IRequest): Promise<void>{

   await this.ReplyTicketRentRepository.create({
   id,  idTicket, IdClient, idCompany, idAuto,message, imagesProperty
    });
  }
}

export { CreateReplyTicketRentUseCase };
