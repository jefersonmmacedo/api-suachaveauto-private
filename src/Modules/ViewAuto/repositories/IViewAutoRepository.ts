import { ViewAuto } from "../models/ViewAuto";

interface ICreateViewAutoDTO {
  id: string;
  idAuto: string;
  idCompany: string;
  idClient: string;
  origin: string;
  latitude: string;
  longitude: string;
  brand: string;
  model: string;
}

interface IViewAutoRepository {
  create({
   idAuto, idClient, idCompany, origin, latitude, longitude, brand, model,
  }: ICreateViewAutoDTO): void;
  update({
   id, idAuto, idClient, idCompany, origin, latitude, longitude, brand, model,
  }: ICreateViewAutoDTO): void;
  list();
  delete({id});
}

export { IViewAutoRepository, ICreateViewAutoDTO };
 