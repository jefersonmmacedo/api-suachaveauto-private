import { ViewProperty } from "../models/ViewProperty";

interface ICreateViewPropertyDTO {
  id: string;
  idProperty: string;
  idCompany: string;
  idClient: string;
  origin: string;
  latitude: string;
  longitude: string;
  type: string;
  subType: string;
}

interface IViewPropertyRepository {
  create({
   idProperty, idClient, idCompany, origin, latitude, longitude, type, subType,
  }: ICreateViewPropertyDTO): void;
  update({
   id, idProperty, idClient, idCompany, origin, latitude, longitude, type, subType,
  }: ICreateViewPropertyDTO): void;
  list();
  delete({id});
}

export { IViewPropertyRepository, ICreateViewPropertyDTO };
