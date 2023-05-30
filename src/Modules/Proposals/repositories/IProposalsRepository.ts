import { Proposals } from "../models/Proposals";

interface ICreateProposalsDTO {
  id: string;
  typeProposal: string;
  idCompany: string;
  idProperty: string;
  title: string;
  type: string;
  subType: string;
  condominium: string;
  iptu: string;
  otherPrices: string;
  idClient: string;
  nameClient: string;
  cpfCnpjClient: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  valueProperty: string;
  formOfpayment: string;
  expirationDate: string;
  contactReminder: string;
}

 
 interface IProposalsRepository {
  create({
    typeProposal, idCompany, idProperty, title, type, subType, condominium, iptu, otherPrices, 
    idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
    status, valueProperty, formOfpayment, expirationDate, contactReminder, 
  }: ICreateProposalsDTO): void;
  update({
    id, typeProposal, idCompany, idProperty, title, type, subType, condominium, iptu, otherPrices,
    idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
    status, valueProperty, formOfpayment, expirationDate, contactReminder, 
  }: ICreateProposalsDTO): void;
  list();
  delete({id});
}

export { IProposalsRepository, ICreateProposalsDTO };
