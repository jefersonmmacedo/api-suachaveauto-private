import { ReplyTicketSupport } from "../models/ReplyTicketSupport";

interface IReplyTicketSupportDTO {
  id: string;
  idTicket: string;
  IdClient: string;
  idCompany: string;
  idAuto:string;
  message: string;
  imagesProperty: object;
}


 


interface IReplyTicketSupportRepository {
  create({id, idTicket, IdClient, idCompany, idAuto,message, imagesProperty }: IReplyTicketSupportDTO): Promise<void>;
  list();
  delete({id});
}

export { IReplyTicketSupportRepository, IReplyTicketSupportDTO };
