import { IMyPlainRepository } from "../../repositories/IMyPlainRepository";

interface IRequest {
  id: string;
  idPlain: string;
  idCompany: string;
  status: string;
  value: string;
  maturity: string;
  namePlain: string;
  users: string;
  emphasis: string;
}

class CreateMyPlainUseCase {
  constructor(private MyPlainRepository: IMyPlainRepository) {
    ("");
  }

  async execute({
    id,idPlain, idCompany, status, value, maturity, namePlain, users, emphasis
  }: IRequest): Promise<void>{

   await this.MyPlainRepository.create({
   id, idPlain, idCompany, status, value, maturity, namePlain, users, emphasis
    });
  }
}

export { CreateMyPlainUseCase };
