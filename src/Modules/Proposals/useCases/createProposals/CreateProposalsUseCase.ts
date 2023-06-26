import { IProposalsRepository } from "../../repositories/IProposalsRepository";

interface IRequest {
  id: string;
  typeProposal: string;
  idCompany: string;
  idAuto: string;
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

class CreateProposalsUseCase {
  constructor(private ProposalsRepository: IProposalsRepository) {
    " ";
  }

  execute({ id, typeProposal, idCompany, idAuto, title, type, subType, condominium, iptu, otherPrices,
    idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
    status, valueProperty, formOfpayment, expirationDate, contactReminder,  }: IRequest): void {
    this.ProposalsRepository.create({
      id, typeProposal, idCompany, idAuto, title, type, subType, condominium, iptu, otherPrices, 
      idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
status, valueProperty, formOfpayment, expirationDate, contactReminder, 
    });
  }
}

export { CreateProposalsUseCase };


 