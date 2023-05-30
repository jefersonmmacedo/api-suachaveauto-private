import { SchedulingEvaluation } from "../models/SchedulingEvaluation";

interface ISchedulingEvaluationDTO {
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


 
interface ISchedulingEvaluationRepository {
  create({
    idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,
  }: ISchedulingEvaluationDTO): Promise<void>;
  list();
  update({
    idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,
  }: ISchedulingEvaluationDTO): void;
  delete({id});
}

export { ISchedulingEvaluationRepository, ISchedulingEvaluationDTO };
