import { RoomReadData } from "../models/RoomReadData";

interface ICreateRoomReadDataDTO {
  id: string;
  idUser: string;
  idRoom: string;
  dateReady: string;
}

interface IRoomReadDataRepository {
  create({
    idUser, idRoom, dateReady,
  }: ICreateRoomReadDataDTO): void;
  findById(idUser: string): Promise<void>;
  update({
   id, idUser, idRoom, dateReady,
  }: ICreateRoomReadDataDTO): void;
  list();
  delete({id});
}

export { IRoomReadDataRepository, ICreateRoomReadDataDTO };
