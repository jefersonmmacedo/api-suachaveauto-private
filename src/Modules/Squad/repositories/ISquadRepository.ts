import { Squad } from "../models/Squad";

interface ISquadDTO {
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

 

interface ISquadRepository {
  create({ id, avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
    district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password,}: ISquadDTO): Promise<void>;
    session(email: string, id: string, password: string);
  findByEmail(email: string): Promise<void>;
  findByCpf(cpf: string): Promise<void>;
  list();
  update({id, avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
    district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password, }: ISquadDTO): void;
  delete({id});
}

export { ISquadRepository, ISquadDTO };
