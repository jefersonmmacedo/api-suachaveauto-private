import { hash } from "bcrypt";
import { IMessageReadDataRepository } from "../../repositories/IMessageReadDataRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idUser: string;
  dateReady: string;
}

class UpdateMessageReadDataUseCase {
  constructor(private accountRepository: IMessageReadDataRepository) {
    " ";
  }

     
  async execute({id, idUser, dateReady, }: IRequest): Promise<void> {

      await this.accountRepository.update({
        id, idUser, dateReady,
      });

  }
}

export { UpdateMessageReadDataUseCase };
