import { IRoomReadDataRepository } from "../../repositories/IRoomReadDataRepository";

interface IRequest {
  id: string;
  idUser: string;
  idRoom: string;
  dateReady: string;
}

class CreateRoomReadDataUseCase {
  constructor(private RoomReadDataRepository: IRoomReadDataRepository) {
    " ";
  }

  execute({ id, idUser, idRoom, dateReady }: IRequest): void {
    this.RoomReadDataRepository.create({
      id, idUser, idRoom, dateReady
    });
  }
}

export { CreateRoomReadDataUseCase };
