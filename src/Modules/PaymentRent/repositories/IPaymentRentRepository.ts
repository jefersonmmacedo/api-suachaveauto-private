import { PaymentRent } from "../models/PaymentRent";

interface IPaymentRentDTO {
  id: string;
  idClient: string;
  idCompany: string;
  IdNegotiation:string;
  value: string;
  parcel: number;
  linkComprovant: string;
  status: string;
  deadline: string;
}


interface IPaymentRentRepository {
  create({idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, deadline, }: IPaymentRentDTO): Promise<void>;
  list();
  delete({id});
  update({id, idClient, idCompany, IdNegotiation, value, parcel, linkComprovant, status, deadline,}): Promise<void>
}

export { IPaymentRentRepository, IPaymentRentDTO };
