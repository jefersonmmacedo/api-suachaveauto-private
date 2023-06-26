import { hash } from "bcrypt";
import { IContractsRepository } from "../../repositories/IContractsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idAuto: string;
  title: string;
  idCompany: string;
  idLocator: string;
  nameLocator: string;
  cpfCnpjLocator: string;
  idClient: string;
  nameClient: string;
  cpfCnpjClient: string;
  idGuarantor: string;
  nameGuarantor: string;
  cpfCnpjGuarantor: string;
  emailClient: string;
  phoneClient: string;
  whatsappClient: string;
  type: string;
  subType: string;
  assurance: string;
  securityDeposit: string;
  typeNegotiation: string;
  newContract: string;
  status: string;
  startContract: string; //Início do contrato
  endContract: string; //Final do contrato
  parcels: string; //Numero de parcelas
  maturityContract: object; //Vencimento
  valueContract: object; // Valor do contrato
  condominium: string;
  iptu: string;
  otherPrices: string;
  adjustment: string; // Este imóvel tem reajuste anual? (Sim, Não)
  readjustedRentDate: string; //Data do próximo reajuste ( A cada novo reajuste criado, atualiza esta data para +12 meses)
  transfer: string; // Repasse (Fixo ou %)
  transferAmount: string;  //Valor do repasse
  proportionalRent: string; // Primeira parcela proporcional
  daysProportional: number; 
  firstProportionalInstallment: string;  // Valor da primeira parcela proporcional
  fireInsurance: string; // Possui seguto incendio
  valueFireInsurance: string;  // Valor do seguro incendio
  readjustmentIndex: string; 
  fireInsuranceExpiration: string;
}

class CreateContractsUseCase {
  constructor(private ContractsRepository: IContractsRepository) {
    " ";
  }
  
  async execute({id, idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
    nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
    startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
    readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
    readjustmentIndex, fireInsuranceExpiration,}: IRequest): Promise<void> {

      await this.ContractsRepository.create({
        id, idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
        nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
        startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
        readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
        readjustmentIndex, fireInsuranceExpiration,
      });

  }
}

export { CreateContractsUseCase };


