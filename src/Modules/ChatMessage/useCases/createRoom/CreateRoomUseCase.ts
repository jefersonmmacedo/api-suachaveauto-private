import { IRoomRepository } from "../../repositories/IRoomRepository";

interface IRequest {
  id: string;
  room: string;
  idCompany: string;
  idClient: string;
  idAuto: string;
  imageProperty: string;
}

class CreateRoomUseCase {
  constructor(private RoomRepository: IRoomRepository) {
    " ";
  }

  execute({ id, room, idCompany, idClient, idAuto, imageProperty }: IRequest): void {
    this.RoomRepository.create({
      id, room, idCompany, idClient, idAuto, imageProperty
    });
  }
}

export { CreateRoomUseCase };
