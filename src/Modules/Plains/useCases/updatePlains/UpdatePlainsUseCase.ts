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

 
class UpdatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    " ";
  }
  
  async execute({id, name, value, valueNew, status, period, infos, note, emphasis, users, }: IRequest): Promise<void> {
         await this.PlainsRepository.update({
       id, name, value, valueNew, status, period, infos, note, emphasis, users,
      });

  }
}

export { UpdatePlainsUseCase };
