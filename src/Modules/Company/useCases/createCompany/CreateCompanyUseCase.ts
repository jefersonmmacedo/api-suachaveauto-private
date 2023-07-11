import { hash } from "bcrypt";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  type: string;
  status: string;
  typeDocument: string;
  cpf_Cnpj: string;
  verified: boolean;
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
  password: Promise<string>;
}

class CreateCompanyUseCase {
  constructor(private CompanyRepository: ICompanyRepository) {
    " ";
  }
  
  async execute({id,type,verified, status, typeDocument, cpf_Cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, textWhatsapp, whatsapp2, textWhatsapp2, whatsapp3, textWhatsapp3, whatsapp4, textWhatsapp4,  password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam,}: IRequest): Promise<void> {
    const findEmail = await this.CompanyRepository.findByEmail(email);
    const passwordHash = await hash(await password, 8);

      await this.CompanyRepository.create({
        id, type,verified, status, typeDocument, cpf_Cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, textWhatsapp, whatsapp2, textWhatsapp2, whatsapp3, textWhatsapp3, whatsapp4, textWhatsapp4,  password:passwordHash, responsibleName,
        emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
        instagram, linkedin, youtube, aceptTerms, idComercialTeam,
      });

  }
}

export { CreateCompanyUseCase };