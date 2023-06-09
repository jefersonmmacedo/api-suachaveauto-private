import { AlertClient } from "../models/AlertClient";

interface ICreateAlertClientDTO {
  id: string;
  idAuto: string;
  email: string;
  name: string;
  whatsapp: string;
  district: string;
  city: string;
  uf: string;
  status: string;
  pets: string;
  furnished: string;
  type: string;
  subType: string;
  bedroom: string;
  suite: string;
  restroom: string;
  garage: string;
}

 
interface IAlertClientRepository {
  create({
   idAuto, email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
  }: ICreateAlertClientDTO): void;
  update({
   id, idAuto, email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
  }: ICreateAlertClientDTO): void;
  list();
  delete({id});
}

export { IAlertClientRepository, ICreateAlertClientDTO };
