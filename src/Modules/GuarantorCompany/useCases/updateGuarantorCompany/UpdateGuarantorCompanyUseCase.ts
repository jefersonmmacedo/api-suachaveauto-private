import { hash } from "bcrypt";
import { IGuarantorCompanyRepository } from "../../repositories/IGuarantorCompanyRepository";
import { Request, Response } from "express";

interface IRequest {
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


class UpdateGuarantorCompanyUseCase {
  constructor(private GuarantorCompanyRepository: IGuarantorCompanyRepository) {
    " ";
  }
  
  async execute({id, idProcess, idCompany, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, }: IRequest): Promise<void> { 

      await this.GuarantorCompanyRepository.update({
        id, idProcess, idCompany, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, 
      });

  }
}

export { UpdateGuarantorCompanyUseCase };
