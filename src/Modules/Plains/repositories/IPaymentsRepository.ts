import { EPaymentsType, Payments } from "../models/Payments";

interface IPaymentsDTO {
  id: string;
  idPlain: string;
  idCompany: string;
  email:string;
  namePlain:string;
  value: string;
  period: number;
  type: EPaymentsType;
  invoice_link?: string;
  voucher?: string;
  aceptTerms: string;
  status: string;
}

interface IPaymentsRepository {
  create({id, idPlain, idCompany, email, namePlain, value, period, type, invoice_link, voucher, aceptTerms, status }: IPaymentsDTO): Promise<void>;
  list();
  delete({id});
  update({id, idPlain, idCompany, email, namePlain, value, period, type, invoice_link, voucher, aceptTerms, status}): Promise<void>
}

export { IPaymentsRepository, IPaymentsDTO };
