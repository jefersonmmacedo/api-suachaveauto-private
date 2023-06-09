import { ITicketRentRepository } from "../../repositories/ITicketRentRepository";

interface IRequest {
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

class CreateTicketRentUseCase {
  constructor(private TicketRentRepository: ITicketRentRepository) {
    ("");
  }

  async execute({
    id,IdClient, idCompany, idAuto, status, priority, type, message, imagesProperty,
  }: IRequest): Promise<void>{

   await this.TicketRentRepository.create({
   id, IdClient, idCompany, idAuto, status, priority, type, message, imagesProperty,
    });
  }
}

export { CreateTicketRentUseCase };
