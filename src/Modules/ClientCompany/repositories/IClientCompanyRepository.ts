import { ClientCompany } from "../models/ClientCompany";

interface IClientCompanyDTO {
  id: string;
  idProcess: string;
  idCompany: string;
  typeClient: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf_Cnpj: string;
  email: string;
  phone: string;
  whatsapp: string;
  avatar: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  interest: string;
  type: string;
  subtype: string;
  cityPreference: string;
  ufPreference: string;
  attendance: string;
}




 
interface IClientCompanyRepository {
  create({ id, idProcess, typeClient, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }: IClientCompanyDTO): Promise<void>;
  findById(id: string): Promise<void>;
  list();
  update({ id, idProcess, typeClient, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }: IClientCompanyDTO): void;
  delete({id});
}

export { IClientCompanyRepository, IClientCompanyDTO };
