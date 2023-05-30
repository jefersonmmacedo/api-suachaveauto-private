import { hash } from "bcrypt";
import { ISquadRepository } from "../../repositories/ISquadRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  avatar: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf: string;
  profession: string;
  birthday: Date;
  register: string;
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
  bank: string;
  agency: string;
  typeAccount: string;
  account: string;
  typeKeyPix: string;
  keypix: string;
  password: string;
}

class CreateSquadUseCase {
  constructor(private SquadRepository: ISquadRepository) {
    " ";
  }
  
  async execute({id,  avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
    district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password,}: IRequest): Promise<void> {
    const findEmail = await this.SquadRepository.findByEmail(email);

      await this.SquadRepository.create({
        id,  avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
        district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password,
      });

  }
}

export { CreateSquadUseCase };


