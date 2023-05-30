import { RoomReadDataRepository } from "../../repositories/implementations/RoomReadDataRepository";
import { ListRoomReadDataController } from "./ListRoomReadDataController";
import { ListRoomReadDataUseCase } from "./ListRoomReadDataUseCase";

const roomReadDataRepository = RoomReadDataRepository.getInstance();

const listRoomReadDataUsecase = new ListRoomReadDataUseCase(roomReadDataRepository);

const listRoomReadDataController = new ListRoomReadDataController(listRoomReadDataUsecase);

export { listRoomReadDataController };
