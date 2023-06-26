import { Financer } from "../models/Financer";

interface ICreateFinancerDTO {
  id: string;
  idCompany: string;
  idLocator: string;
  nameLocator: string;
  idAuto: string;
  titleProperty: string;
  idTransaction: string; //Venda - Aluguel
  title: string;
  description: string;
  type: string;
  value: string;
  document: string;
}

 

interface IFinancerRepository {
  create({
   idCompany, idLocator, nameLocator, idAuto, titleProperty, idTransaction, title, description, type, value, document
  }: ICreateFinancerDTO): void;
  update({
   id, idCompany, idLocator, nameLocator, idAuto, titleProperty, idTransaction, title, description, type, value, document
  }: ICreateFinancerDTO): void;
  list();
  delete({id});
}

export { IFinancerRepository, ICreateFinancerDTO };
