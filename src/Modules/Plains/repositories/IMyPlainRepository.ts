import { MyPlain } from "../models/MyPlain";

interface IMyPlainDTO {
  id: string;
  idPlain: string;
  idCompany: string;
  status: string;
  value: string;
  maturity: string;
  namePlain: string;
  users: string;
  emphasis: string;
}
 

interface IMyPlainRepository {
  create({idPlain, idCompany, status, value, maturity, namePlain, users, emphasis }: IMyPlainDTO): Promise<void>;
  list();
  delete({id});
  update({id, idPlain, idCompany, status, value, maturity, namePlain, users, emphasis}): Promise<void>
}

export { IMyPlainRepository, IMyPlainDTO };
