import { PaymentPropertyCharges } from "../models/PaymentPropertyCharges";

interface IPaymentPropertyChargesDTO {
  id: string;
  idCompany: string;
  idLocator: string;
  idProperty: string;
  paymentPropertyCharge: string;
  voucher: string;
  type: string;
  description: string;
  value: string;
  deadline: string;
}

 

interface IPaymentPropertyChargesRepository {
  create({ idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, }: IPaymentPropertyChargesDTO): Promise<void>;
  findById(id: string): Promise<void>;
  list();
  update({ id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline,}: IPaymentPropertyChargesDTO): void;
  delete({id});
}

export { IPaymentPropertyChargesRepository, IPaymentPropertyChargesDTO };
