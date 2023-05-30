import { hash } from "bcrypt";
import { IPropertyChargesRepository } from "../../repositories/IPropertyChargesRepository";
import { Request, Response } from "express";

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


class UpdatePropertyChargesUseCase {
  constructor(private PropertyChargesRepository: IPropertyChargesRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
   }: IRequest): Promise<void> {
  

      await this.PropertyChargesRepository.update({
        id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
      });

  }
}

export { UpdatePropertyChargesUseCase };
