import { hash } from "bcrypt";
import { IFinancerRepository } from "../../repositories/IFinancerRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idLocator: string;
  nameLocator: string;
  idProperty: string;
  titleProperty: string;
  idTransaction: string;
  title: string;
  description: string;
  type: string;
  value: string;
  document: string;
}

class UpdateFinancerUseCase {
  constructor(private accountRepository: IFinancerRepository) {
    " ";
  }
  
  async execute({id, idCompany, idLocator, nameLocator, idProperty, titleProperty, idTransaction, title, description, type, value, document, }: IRequest): Promise<void> {
      await this.accountRepository.update({
        id, idCompany, idLocator, nameLocator, idProperty, titleProperty, idTransaction, title, description, type, value, document,
      });

  }
}

export { UpdateFinancerUseCase };
