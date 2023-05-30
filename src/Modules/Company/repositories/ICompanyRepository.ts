import { Company } from "../models/Company";

interface ICompanyDTO {
  id: string;
  type: string;
  verified: boolean;
  status: string;
  typeDocument: string;
  cpf_Cnpj: string;
  socialReason: string;
  fantasyName: string;
  creci: string;
  email: string;
  phone: string;
  whatsapp: string;
  password: string;
  responsibleName: string;
  emailResponsible: string;
  whatsappResponsible: string;
  logo: string;
  cep: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  complement: string;
  reference: string;
  viewAddress: boolean;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  nameSlug: string;
  aceptTerms: string;
  idComercialTeam: string;
}
  
 
interface ICompanyRepository {
  create({ type,verified, status, typeDocument, cpf_Cnpj, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam, }: ICompanyDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({id, type,verified, status, typeDocument, cpf_Cnpj, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam,}: ICompanyDTO): void;
  delete({id});
}

export { ICompanyRepository, ICompanyDTO };



