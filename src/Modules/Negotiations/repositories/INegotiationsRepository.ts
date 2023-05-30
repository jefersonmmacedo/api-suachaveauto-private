import { Negotiations } from "../models/Negotiations";

interface INegotiationsDTO {
  id: string;
  idCompany: string;
  idTeam: string;
  idClient: string;
  nameClient: string;
  cpfClient: string;
  idProperty: string;
  typeNegotiation: string;
  status: string;
  deadline: string;
  parcel: string;
  valueProperty: string;
  amountofCharges: string;
  valueTotal: string;
  typeOfInsurance: string;
}

 
 

interface INegotiationsRepository {
  create({
    idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status,
    deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance
  }: INegotiationsDTO): Promise<void>;
  list();
  update({id, idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status, deadline, parcel,
    valueProperty, amountofCharges, valueTotal, typeOfInsurance}: INegotiationsDTO): void;
  delete({id});
}

export { INegotiationsRepository, INegotiationsDTO };
