import { GuarantorCompany } from "../models/GuarantorCompany";

interface IGuarantorCompanyDTO {
  id: string;
  idProcess: string;
  idCompany: string;
  typeGuarantor: string;
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




 
interface IGuarantorCompanyRepository {
  create({ id, idProcess, typeGuarantor, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }: IGuarantorCompanyDTO): Promise<void>;
  findById(id: string): Promise<void>;
  list();
  update({ id, idProcess, typeGuarantor, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }: IGuarantorCompanyDTO): void;
  delete({id});
}

export { IGuarantorCompanyRepository, IGuarantorCompanyDTO };
