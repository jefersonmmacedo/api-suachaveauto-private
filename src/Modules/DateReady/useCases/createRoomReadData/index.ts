import { RoomReadDataRepository } from "../../repositories/implementations/RoomReadDataRepository";
import { CreateRoomReadDataController } from "./CreateRoomReadDataController";
import { CreateRoomReadDataUseCase } from "./CreateRoomReadDataUseCase";

const roomReadDataRepository = RoomReadDataRepository.getInstance();

const createRoomReadDataUseCase = new CreateRoomReadDataUseCase(roomReadDataRepository);

const createRoomReadDataController = new CreateRoomReadDataController(createRoomReadDataUseCase);

export { createRoomReadDataController };
