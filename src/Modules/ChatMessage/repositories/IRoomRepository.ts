import { Room } from "../models/Room";

interface ICreateRoomDTO {
  id: string;
  room: string;
  idCompany: string;
  idClient: string;
  idProperty: string;
  imageProperty: string;
}

 
interface IRoomRepository {
  create({
   id, room, idCompany, idClient, idProperty, imageProperty, 
  }: ICreateRoomDTO): void;
  update({
   id, room, idCompany, idClient, idProperty, imageProperty, 
  }: ICreateRoomDTO): void;
  list();
  delete({id});
}

export { IRoomRepository, ICreateRoomDTO };
