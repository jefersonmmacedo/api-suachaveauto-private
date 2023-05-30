import { hash } from "bcrypt";
import { IRoomReadDataRepository } from "../../repositories/IRoomReadDataRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idUser: string;
  idRoom: string;
  dateReady: string;
}

class UpdateRoomReadDataUseCase {
  constructor(private accountRepository: IRoomReadDataRepository) {
    " ";
  }

     
  async execute({id, idUser,idRoom, dateReady, }: IRequest): Promise<void> {

      await this.accountRepository.update({
        id, idUser,idRoom, dateReady,
      });

  }
}

export { UpdateRoomReadDataUseCase };
