import { DeletedCompany } from "../models/DeletedCompany";

interface ICreateDeletedCompanyDTO {
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

 interface IDeletedCompanyRepository {
  create({
    idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
    clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
  }: ICreateDeletedCompanyDTO): void;
  update({
   id, idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
   clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
  }: ICreateDeletedCompanyDTO): void;
  list();
  delete({id});
}

export { IDeletedCompanyRepository, ICreateDeletedCompanyDTO };
