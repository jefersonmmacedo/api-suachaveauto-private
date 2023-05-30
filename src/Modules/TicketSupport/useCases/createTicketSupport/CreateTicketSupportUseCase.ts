import { ITicketSupportRepository } from "../../repositories/ITicketSupportRepository";

interface IRequest {
  id: string;
  IdClient: string;
  idCompany: string;
  idProperty:string;
  status: string;
  priority: string;
  type: string;
  message: string;
  imagesProperty: object;
}

class CreateTicketSupportUseCase {
  constructor(private TicketSupportRepository: ITicketSupportRepository) {
    ("");
  }

  async execute({
    id,IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,
  }: IRequest): Promise<void>{

   await this.TicketSupportRepository.create({
   id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,
    });
  }
}

export { CreateTicketSupportUseCase };
