import { RoomRepository } from "../../repositories/implementations/RoomRepository";
import { ListRoomClientController } from "./ListRoomClientController";
import { ListRoomClientUseCase } from "./ListRoomClientUseCase";

const roomRepository = RoomRepository.getInstance();

const listRoomClientUsecase = new ListRoomClientUseCase(roomRepository);

const listRoomClientController = new ListRoomClientController(listRoomClientUsecase);

export { listRoomClientController };
