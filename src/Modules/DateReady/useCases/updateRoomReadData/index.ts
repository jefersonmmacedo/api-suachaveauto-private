import { RoomReadDataRepository } from "../../repositories/implementations/RoomReadDataRepository";
import { UpdateRoomReadDataController } from "./UpdateRoomReadDataController";
import { UpdateRoomReadDataUseCase } from "./UpdateRoomReadDataUseCase";

const roomReadDataRepository = RoomReadDataRepository.getInstance();

const updateRoomReadDataUseCase = new UpdateRoomReadDataUseCase(roomReadDataRepository);

const updateRoomReadDataController = new UpdateRoomReadDataController(updateRoomReadDataUseCase);

export { updateRoomReadDataController };
