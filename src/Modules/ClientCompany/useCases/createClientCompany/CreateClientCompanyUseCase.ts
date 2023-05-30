import { hash } from "bcrypt";
import { IClientCompanyRepository } from "../../repositories/IClientCompanyRepository";
import { Request, Response } from "express";

interface IRequest {
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

class CreateClientCompanyUseCase {
  constructor(private ClientCompanyRepository: IClientCompanyRepository) {
    " ";
  }
  
  async execute({id, idProcess, idCompany, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, }: IRequest): Promise<void> {
  
      await this.ClientCompanyRepository.create({
        id, idProcess, idCompany, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, 
      });

  }
}

export { CreateClientCompanyUseCase };