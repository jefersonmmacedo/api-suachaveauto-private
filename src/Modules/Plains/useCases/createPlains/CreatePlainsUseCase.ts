import { IPlainsRepository } from "../../repositories/IPlainsRepository";

interface IRequest {
  id: string;
  name: string;
  value: string;
  valueNew: string;
  status: string;
  period: number;
  infos: object;
  note: string;
  emphasis: string;
  users: string;
}

 
class CreatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    ("");
  }

  async execute({id, name, value, valueNew, status, period, infos, note,emphasis, users, }: IRequest): Promise<void>{

   await this.PlainsRepository.create({id, name, value, valueNew, status, period, infos, note,emphasis, users,});
  }
}

export { CreatePlainsUseCase };
