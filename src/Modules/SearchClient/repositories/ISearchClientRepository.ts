import { SearchClient } from "../models/SearchClient";

interface ICreateSearchClientDTO {
  id: string;
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

 
interface ISearchClientRepository {
  create({
   email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
  }: ICreateSearchClientDTO): void;
  update({
   id, email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
  }: ICreateSearchClientDTO): void;
  list();
  delete({id});
}

export { ISearchClientRepository, ICreateSearchClientDTO };
