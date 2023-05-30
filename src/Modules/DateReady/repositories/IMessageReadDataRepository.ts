import { MessageReadData } from "../models/MessageReadData";

interface ICreateMessageReadDataDTO {
  id: string;
  idUser: string;
  dateReady: string;
}

interface IMessageReadDataRepository {
  create({
    idUser, dateReady,
  }: ICreateMessageReadDataDTO): void;
  findById(idUser: string): Promise<void>;
  update({
   id, idUser, dateReady,
  }: ICreateMessageReadDataDTO): void;
  list();
  delete({id});
}

export { IMessageReadDataRepository, ICreateMessageReadDataDTO };
