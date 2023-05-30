import { IContractsRepository } from "../../repositories/IContractsRepository";

interface IRequest {
  id: string;
  idProperty: string;
  title: string;
  idCompany: string;
  idLocator: string;
  nameLocator: string;
  cpfCnpjLocator: string;
  idClient: string;
  nameClient: string;
  cpfCnpjClient: string;
  emailClient: string;
  phoneClient: string;
  whatsappClient: string;
  idGuarantor: string;
  nameGuarantor: string;
  cpfCnpjGuarantor: string;
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
  readjustmentIndex: string; 
  transfer: string; // Repasse (Fixo ou %)
  transferAmount: string;  //Valor do repasse
  proportionalRent: string; // Primeira parcela proporcional
  daysProportional: number; //
  firstProportionalInstallment: string;  // Valor da primeira parcela proporcional
  fireInsurance: string; // Possui seguto incendio
  valueFireInsurance: string;  // Valor do seguro incendio
  fireInsuranceExpiration: string;  // Vencimento seguro incendio
}

 
class UpdateContractUseCase {
  constructor(private ContractRepository: IContractsRepository) {
    " ";
  }
  
  async execute({
    id,idProperty, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
    nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
    startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
    readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
    readjustmentIndex, fireInsuranceExpiration,
   }: IRequest): Promise<void> {
         await this.ContractRepository.update({
          id,idProperty, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
          nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
          startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
          readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
          readjustmentIndex, fireInsuranceExpiration,
      });

  }
}

export { UpdateContractUseCase };
