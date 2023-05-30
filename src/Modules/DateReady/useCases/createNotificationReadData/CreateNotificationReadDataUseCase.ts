import { INotificationReadDataRepository } from "../../repositories/INotificationReadDataRepository";

interface IRequest {
  id: string;
  idUser: string;
  dateReady: string;
}

class CreateNotificationReadDataUseCase {
  constructor(private NotificationReadDataRepository: INotificationReadDataRepository) {
    " ";
  }

  execute({ id, idUser, dateReady }: IRequest): void {
    this.NotificationReadDataRepository.create({
      id, idUser, dateReady
    });
  }
}

export { CreateNotificationReadDataUseCase };
