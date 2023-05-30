import { RoomRepository } from "../../repositories/implementations/RoomRepository";
import { ListRoomController } from "./ListRoomController";
import { ListRoomUseCase } from "./ListRoomUseCase";

const roomRepository = RoomRepository.getInstance();

const listRoomUsecase = new ListRoomUseCase(roomRepository);

const listRoomController = new ListRoomController(listRoomUsecase);

export { listRoomController };
