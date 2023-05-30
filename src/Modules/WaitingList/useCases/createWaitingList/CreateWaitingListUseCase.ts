import { IWaitingListRepository } from "../../repositories/IWaitingListRepository";

interface IRequest {
  id: string;
  type: string;
  nameFantasy: string;
  whatsapp: string;
  email: string;
  cep: string;
  city: string;
  uf: string;
}

class CreateWaitingListUseCase {
  constructor(private WaitingListRepository: IWaitingListRepository) {
    " ";
  }

  execute({ id, type, nameFantasy, whatsapp, email, cep, city, uf, }: IRequest): void {

    this.WaitingListRepository.create({
      id, type, nameFantasy, whatsapp, email, cep, city, uf,
    });
  }
}

export { CreateWaitingListUseCase };
