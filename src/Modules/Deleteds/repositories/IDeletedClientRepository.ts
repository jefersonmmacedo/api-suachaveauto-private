import { DeletedClient } from "../models/DeletedClient";

interface ICreateDeletedClientDTO {
  id: string;
  idClient: string;
  Reason: string;
  description: string;
  favorites: string;
  messages: string;
  schedule: string;
}

 
 interface IDeletedClientRepository {
  create({
   idClient, Reason, description, favorites, messages, schedule,
  }: ICreateDeletedClientDTO): void;
  update({
   id, idClient, Reason, description, favorites, messages, schedule,
  }: ICreateDeletedClientDTO): void;
  list();
  delete({id});
}

export { IDeletedClientRepository, ICreateDeletedClientDTO };
