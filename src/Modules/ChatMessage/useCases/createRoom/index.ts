import { RoomRepository } from "../../repositories/implementations/RoomRepository";
import { CreateRoomController } from "./CreateRoomController";
import { CreateRoomUseCase } from "./CreateRoomUseCase";

const roomRepository = RoomRepository.getInstance();

const createRoomUseCase = new CreateRoomUseCase(roomRepository);

const createRoomController = new CreateRoomController(createRoomUseCase);

export { createRoomController };
