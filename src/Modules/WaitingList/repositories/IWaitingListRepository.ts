import { WaitingList } from "../models/WaitingList";

interface ICreateWaitingListDTO {
  id: string;
  type: string;
  nameFantasy: string;
  whatsapp: string;
  email: string;
  cep: string;
  city: string;
  uf: string;
}

 
interface IWaitingListRepository {
  create({
   type, nameFantasy, whatsapp, email, cep, city, uf,
  }: ICreateWaitingListDTO): void;
  update({
   id, type, nameFantasy, whatsapp, email, cep, city, uf,
  }: ICreateWaitingListDTO): void;
  list();
  delete({id});
}

export { IWaitingListRepository, ICreateWaitingListDTO };
