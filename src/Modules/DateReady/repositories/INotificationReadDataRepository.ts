import { NotificationReadData } from "../models/NotificationReadData";

interface ICreateNotificationReadDataDTO {
  id: string;
  idUser: string;
  dateReady: string;
}

 
interface INotificationReadDataRepository {
  create({
    idUser, dateReady,
  }: ICreateNotificationReadDataDTO): void;
  update({
   id, idUser, dateReady,
  }: ICreateNotificationReadDataDTO): void;
  list();
  delete({id});
}

export { INotificationReadDataRepository, ICreateNotificationReadDataDTO };
