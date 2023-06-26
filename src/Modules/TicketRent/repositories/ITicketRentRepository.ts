import { TicketRent } from "../models/TicketRent";

interface ITicketRentDTO {
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



interface ITicketRentRepository {
  create({IdClient, idCompany, idAuto, status, priority, type, message, imagesProperty,  }: ITicketRentDTO): Promise<void>;
  list();
  delete({id});
}

export { ITicketRentRepository, ITicketRentDTO };
