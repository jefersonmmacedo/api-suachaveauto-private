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
  textWhatsapp: string;
  whatsapp2: string;
  textWhatsapp2: string;
  whatsapp3: string;
  textWhatsapp3: string;
  whatsapp4: string;
  textWhatsapp4: string;
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
  create({ type,verified, status, typeDocument, cpf_Cnpj, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, textWhatsapp, whatsapp2, textWhatsapp2, whatsapp3, textWhatsapp3, whatsapp4, textWhatsapp4,  password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam, }: ICompanyDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({id, type,verified, status, typeDocument, cpf_Cnpj, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, textWhatsapp, whatsapp2, textWhatsapp2, whatsapp3, textWhatsapp3, whatsapp4, textWhatsapp4,  password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam,}: ICompanyDTO): void;
  delete({id});
}

export { ICompanyRepository, ICompanyDTO };



