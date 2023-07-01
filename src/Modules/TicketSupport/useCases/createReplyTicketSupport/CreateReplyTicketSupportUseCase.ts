import { ReplyTicketSupportRepository } from "../../repositories/implementations/ReplyTicketSupportRepository";


interface IRequest {
  id: string;
  idTicket: string;
  IdClient: string;
  idCompany: string;
  idAuto:string;
  message: string;
  imagesProperty: object;
}

class CreateReplyTicketSupportUseCase {
  constructor(private ReplyTicketSupportRepository: ReplyTicketSupportRepository) {
    ("");
  }

  async execute({
    id, idTicket, IdClient, idCompany, idAuto,message, imagesProperty
  }: IRequest): Promise<void>{

   await this.ReplyTicketSupportRepository.create({
   id,  idTicket, IdClient, idCompany, idAuto,message, imagesProperty
    });
  }
}

export { CreateReplyTicketSupportUseCase };
