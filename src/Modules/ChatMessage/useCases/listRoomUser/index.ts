import { RoomRepository } from "../../repositories/implementations/RoomRepository";
import { ListRoomUserController } from "./ListRoomUserController";
import { ListRoomUserUseCase } from "./ListRoomUserUseCase";

const roomRepository = RoomRepository.getInstance();

const listRoomUserUsecase = new ListRoomUserUseCase(roomRepository);

const listRoomUserController = new ListRoomUserController(listRoomUserUsecase);

export { listRoomUserController };
