import { IPropertyChargesRepository } from "../../repositories/IPropertyChargesRepository";

interface IRequest {
  id: string;
  idCompany: string;
  idLocator: string;
  idProperty: string;
  type: string;
  description: string;
  value: string;
  deadline: string;
  period: string;
  alert: string;
  status: string;
}

class CreatePropertyChargesUseCase {
  constructor(private PropertyChargesRepository: IPropertyChargesRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
   }: IRequest): Promise<void> {
  
      await this.PropertyChargesRepository.create({
        id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
      });

  }
}

export { CreatePropertyChargesUseCase };