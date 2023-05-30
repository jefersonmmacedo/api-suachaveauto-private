import { INotificationRepository } from "../../repositories/INotificationRepository";


interface IRequest {
  id: string;
  idAccount: string;
  text: string;
  type: string;
  link: string;
  view: boolean;
}

class CreateNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {
    " ";
  }
  
  async execute({id, idAccount, text, type, link, view, }: IRequest): Promise<void> {
      await this.NotificationRepository.create({
        id, idAccount, text, type, link, view,
      });

  }
}

export { CreateNotificationUseCase };
