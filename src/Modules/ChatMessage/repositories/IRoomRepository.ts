import { Room } from "../models/Room";

interface ICreateRoomDTO {
  id: string;
  room: string;
  idCompany: string;
  idClient: string;
  idAuto: string;
  imageProperty: string;
}

 
interface IRoomRepository {
  create({
   id, room, idCompany, idClient, idAuto, imageProperty, 
  }: ICreateRoomDTO): void;
  update({
   id, room, idCompany, idClient, idAuto, imageProperty, 
  }: ICreateRoomDTO): void;
  list();
  delete({id});
}

export { IRoomRepository, ICreateRoomDTO };
