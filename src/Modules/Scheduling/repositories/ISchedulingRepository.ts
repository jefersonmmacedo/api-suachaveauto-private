import { Scheduling } from "../models/Scheduling";

interface ISchedulingDTO {
  id: string;
  idClient: string;
  idAuto: string;
  idCompany: string;
  idEvaluation: string;
  dataCar: object;
  imageAuto: string;
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
    idClient, idAuto, idCompany, idEvaluation,   dataCar, imageAuto, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar,location, address,     similarProperties, amountOfPeople, dateCompleted
  }: ISchedulingDTO): Promise<void>;
  list();
  update({id, idClient, idAuto, idCompany, idEvaluation,   dataCar, imageAuto, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO): void;
  delete({id});
}

export { ISchedulingRepository, ISchedulingDTO };
