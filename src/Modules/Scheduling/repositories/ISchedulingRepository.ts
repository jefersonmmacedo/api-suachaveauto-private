import { Scheduling } from "../models/Scheduling";

interface ISchedulingDTO {
  id: string;
  idClient: string;
  idProperty: string;
  idCompany: string;
  idEvaluation: string;
  titleProperty: string;
  imageProperty: string;
  nameClient: string;
  avatarClient: string;
  email: string;
  phone: string;
  whatsapp: string;
  type: string;
  status: string;
  meet: string;
  day: string;
  month: string;
  year: string;
  shift: string;
  hour: string;
  ownACar: string;
  location: string;
  address: string;
  similarProperties: string;
  amountOfPeople: string;
  dateCompleted: Date;
}

 
interface ISchedulingRepository {
  create({
    idClient, idProperty, idCompany, idEvaluation, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar,location, address,     similarProperties, amountOfPeople, dateCompleted
  }: ISchedulingDTO): Promise<void>;
  list();
  update({id, idClient, idProperty, idCompany, idEvaluation, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO): void;
  delete({id});
}

export { ISchedulingRepository, ISchedulingDTO };
