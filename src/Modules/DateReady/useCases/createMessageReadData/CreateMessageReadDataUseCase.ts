import { IMessageReadDataRepository } from "../../repositories/IMessageReadDataRepository";

interface IRequest {
  id: string;
  idUser: string;
  dateReady: string;
}

class CreateMessageReadDataUseCase {
  constructor(private MessageReadDataRepository: IMessageReadDataRepository) {
    " ";
  }

  execute({ id, idUser, dateReady }: IRequest): void {
    this.MessageReadDataRepository.create({
      id, idUser, dateReady
    });
  }
}

export { CreateMessageReadDataUseCase };
