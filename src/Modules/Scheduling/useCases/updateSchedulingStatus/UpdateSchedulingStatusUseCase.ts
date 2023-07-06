import { hash } from "bcrypt";
import { ISchedulingRepository } from "../../repositories/ISchedulingRepository";
import { Request, Response } from "express";

interface IRequest {
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
  amountOfPeople: string;
  similarProperties: string;
  dateCompleted: Date;
}

 

class UpdateSchedulingStatusUseCase {
  constructor(private SchedulingRepository: ISchedulingRepository) {
    " ";
  }
  
  async execute({id, idClient, idAuto, idCompany, idEvaluation, dataCar, imageAuto, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted }: IRequest): Promise<void> {

      await this.SchedulingRepository.update({
        id, idClient, idAuto, idCompany, idEvaluation,  dataCar, imageAuto, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
        day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted
      });

  }
}

export { UpdateSchedulingStatusUseCase };
