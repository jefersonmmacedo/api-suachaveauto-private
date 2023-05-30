import { IDeletedCompanyRepository } from "../../repositories/IDeletedCompanyRepository";

interface IRequest {
  id: string;
  idCompany: string;
  reason: string;
  description: string;
  properties: string;
  messages: string;
  leads: string;
  contracts: string;
  financers: string;
  charges: string;
  schedules: string;
  clients: string;
  locators: string;
  guarantors: string;
  initialDate: string;
  lastPlan: string;
  lastPayment: string;
  reconciliation: string;
  resultReconciliation: string;
}

class CreateDeletedCompanyUseCase {
  constructor(private DeletedCompanyRepository: IDeletedCompanyRepository) {
    " ";
  }

  execute({
    id, idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
    clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
  }: IRequest): void {
    this.DeletedCompanyRepository.create({
      id, idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
      clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
    });
  }
}

export { CreateDeletedCompanyUseCase };
