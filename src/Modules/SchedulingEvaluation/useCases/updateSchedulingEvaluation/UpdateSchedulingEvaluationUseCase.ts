import { hash } from "bcrypt";
import { ISchedulingEvaluationRepository } from "../../repositories/ISchedulingEvaluationRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idClient: string;
  idEvaluation: string;
  idCompany: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  day: string;
  month: string;
  year: string;
  shift: string;
  hour: string;
  address: string;
  dateCompleted: Date;
}

 

class UpdateSchedulingEvaluationUseCase {
  constructor(private SchedulingEvaluationRepository: ISchedulingEvaluationRepository) {
    " ";
  }
  
  async execute({id, idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted, }: IRequest): Promise<void> {

      await this.SchedulingEvaluationRepository.update({
        id, idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,
      });

  }
}

export { UpdateSchedulingEvaluationUseCase };
