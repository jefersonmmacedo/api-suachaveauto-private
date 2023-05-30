import { SchedulingConfig } from "../models/SchedulingConfig";

interface ICreateSchedulingConfigDTO {
  id: string;
	idCompany:string;
  Monday: object;
  Tuesday: object;
  Wednesday: object;
  Thursday: object;
  Friday: object;
  Saturday: object;
  Sunday: object;
}

 

 interface ISchedulingConfigRepository {
  create({
   idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
  }: ICreateSchedulingConfigDTO): void;
  update({
   id, idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
  }: ICreateSchedulingConfigDTO): void;
  list();
  delete({id});
}

export { ISchedulingConfigRepository, ICreateSchedulingConfigDTO };
