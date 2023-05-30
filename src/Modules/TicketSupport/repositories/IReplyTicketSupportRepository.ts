import { ReplyTicketSupport } from "../models/ReplyTicketSupport";

interface IReplyTicketSupportDTO {
  id: string;
  idTicket: string;
  IdClient: string;
  idCompany: string;
  idProperty:string;
  message: string;
  imagesProperty: object;
}


 


interface IReplyTicketSupportRepository {
  create({id, idTicket, IdClient, idCompany, idProperty,message, imagesProperty }: IReplyTicketSupportDTO): Promise<void>;
  list();
  delete({id});
}

export { IReplyTicketSupportRepository, IReplyTicketSupportDTO };
