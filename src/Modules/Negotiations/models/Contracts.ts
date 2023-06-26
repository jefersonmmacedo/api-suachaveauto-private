class Contracts {
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
  readjustmentIndex: string; 
  transfer: string; // Repasse (Fixo ou %)
  transferAmount: string;  //Valor do repasse
  proportionalRent: string; // Primeira parcela proporcional
  daysProportional: number; //
  firstProportionalInstallment: string;  // Valor da primeira parcela proporcional
  fireInsurance: string; // Possui seguto incendio
  valueFireInsurance: string;  // Valor do seguro incendio
  fireInsuranceExpiration: string;  // Vencimento seguro incendio
  created_at: Date;
}

export { Contracts } 

