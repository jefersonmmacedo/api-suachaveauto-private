import { TicketSupport } from "../models/TicketSupport";

interface ITicketSupportDTO {
  id: string;
  IdClient: string;
  idCompany: string;
  idAuto:string;
  status: string;
  priority: string;
  type: string;
  message: string;
  imagesProperty: object;
}



interface ITicketSupportRepository {
  create({IdClient, idCompany, idAuto, status, priority, type, message, imagesProperty,  }: ITicketSupportDTO): Promise<void>;
  list();
  delete({id});
}

export { ITicketSupportRepository, ITicketSupportDTO };
