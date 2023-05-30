import { LocatorCompany } from "../models/LocatorCompany";

interface ILocatorCompanyDTO {
  id: string;
  idCompany: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf_Cnpj: string;
  birthday: string;
  email: string;
  phone: string;
  whatsapp: string;
  cep: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
}

 



 
interface ILocatorCompanyRepository {
  create({ idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf, }: ILocatorCompanyDTO): Promise<void>;
  // findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({ id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf,}: ILocatorCompanyDTO): void;
  delete({id});
}

export { ILocatorCompanyRepository, ILocatorCompanyDTO };
