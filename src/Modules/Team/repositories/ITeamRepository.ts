import { Team } from "../models/Team";

interface ITeamDTO {
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




interface ITeamRepository {
  create({ idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix, password}: ITeamDTO): Promise<void>;
    session(email: string, id: string, password: string);
  findByEmail(email: string): Promise<void>;
  findByCpf(cpf: string): Promise<void>;
  list();
  update({id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix, password }: ITeamDTO): void;
  delete({id});
}

export { ITeamRepository, ITeamDTO };
