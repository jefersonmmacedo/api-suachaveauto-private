import { PropertyCharges } from "../models/PropertyCharges";

interface IPropertyChargesDTO {
  id: string;
  idCompany: string;
  idLocator: string;
  idProperty: string;
  type: string;
  description: string;
  value: string;
  deadline: string;
  period: string;
  alert: string;
  status: string;
}

 

interface IPropertyChargesRepository {
  create({ idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status, }: IPropertyChargesDTO): Promise<void>;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({ id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,}: IPropertyChargesDTO): void;
  delete({id});
}

export { IPropertyChargesRepository, IPropertyChargesDTO };
