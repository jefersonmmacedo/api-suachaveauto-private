import { ReplyTicketRent } from "../models/ReplyTicketRent";

interface IReplyTicketRentDTO {
  id: string;
  idTicket: string;
  IdClient: string;
  idCompany: string;
  idAuto:string;
  message: string;
  imagesProperty: object;
}


 


interface IReplyTicketRentRepository {
  create({id, idTicket, IdClient, idCompany, idAuto,message, imagesProperty }: IReplyTicketRentDTO): Promise<void>;
  list();
  delete({id});
}

export { IReplyTicketRentRepository, IReplyTicketRentDTO };
