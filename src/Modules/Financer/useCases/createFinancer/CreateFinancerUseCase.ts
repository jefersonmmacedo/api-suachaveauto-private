import { IFinancerRepository } from "../../repositories/IFinancerRepository";

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

class CreateFinancerUseCase {
  constructor(private FinancerRepository: IFinancerRepository) {
    " ";
  }

  execute({ id, idCompany, idLocator, nameLocator, idProperty, titleProperty,idTransaction, title, description, type, value, document }: IRequest): void {
    this.FinancerRepository.create({
      id, idCompany, idLocator, nameLocator, idProperty, titleProperty,idTransaction, title, description, type, value, document
    });
  }
}

export { CreateFinancerUseCase };
