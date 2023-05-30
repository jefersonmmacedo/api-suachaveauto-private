import { hash } from "bcrypt";
import { INotificationReadDataRepository } from "../../repositories/INotificationReadDataRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idUser: string;
  dateReady: string;
}

class UpdateNotificationsReadDataUseCase {
  constructor(private accountRepository: INotificationReadDataRepository) {
    " ";
  }

     
  async execute({id, idUser, dateReady, }: IRequest): Promise<void> {

      await this.accountRepository.update({
        id, idUser, dateReady,
      });

  }
}

export { UpdateNotificationsReadDataUseCase };
