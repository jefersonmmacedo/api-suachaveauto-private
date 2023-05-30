import { ISchedulingConfigRepository } from "../../repositories/ISchedulingConfigRepository";

interface IRequest {
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

class CreateSchedulingConfigUseCase {
  constructor(private SchedulingConfigRepository: ISchedulingConfigRepository) {
    " ";
  }

  execute({ id, idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, }: IRequest): void {
    this.SchedulingConfigRepository.create({
      id, idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
    });
  }
}

export { CreateSchedulingConfigUseCase };
