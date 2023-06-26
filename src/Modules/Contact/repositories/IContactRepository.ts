import { Contact } from "../models/Contact";

interface ICreateContactDTO {
  id: string;
  idAuto: string;
  idCompany: string;
  idClient: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  type: string;
  origin: string;
  latitude: string;
  longitude: string;
}
  
interface IContactRepository {
  create({
   idAuto, idCompany, idClient, name, email, phone, whatsapp, type, origin, latitude, longitude,
  }: ICreateContactDTO): void;
  list();
  delete({id});
}

export { IContactRepository, ICreateContactDTO };
