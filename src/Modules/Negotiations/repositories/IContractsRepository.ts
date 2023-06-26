import { Contracts } from "../models/Contracts";

interface IContractsDTO {
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



 
interface IContractsRepository {
  create({ 
    idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient, emailClient, phoneClient, whatsappClient, idGuarantor,
nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
readjustmentIndex, fireInsuranceExpiration,
   }: IContractsDTO): Promise<void>;
  list();
  update({
    id,idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
    nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
    startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
    readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
    readjustmentIndex, fireInsuranceExpiration,
  }: IContractsDTO): void;
  delete({id});
}

export { IContractsRepository, IContractsDTO };
