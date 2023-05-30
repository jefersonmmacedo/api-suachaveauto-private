import { hash } from "bcrypt";
import { ITeamRepository } from "../../repositories/ITeamRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  avatar: string;
  type: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf: string;
  birthday: Date;
  creci: string;
  email: string;
  phone: string;
  whatsapp: string;
  cep: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  bank: string;
  agency: string;
  typeAccount: string;
  account: string;
  typeKeyPix: string;
  keypix: string;
  password: string;
}

class CreateTeamUseCase {
  constructor(private TeamRepository: ITeamRepository) {
    " ";
  }
  
  async execute({id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
    email, phone, whatsapp, cep, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix, password}: IRequest): Promise<void> {
    const findEmail = await this.TeamRepository.findByEmail(email);

      await this.TeamRepository.create({
        id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
        email, phone, whatsapp, cep, road, number, district, city, uf,
        instagram, facebook, linkedin, twitter,
        bank, agency, typeAccount, account, typeKeyPix, keypix, password
      });

  }
}

export { CreateTeamUseCase };


