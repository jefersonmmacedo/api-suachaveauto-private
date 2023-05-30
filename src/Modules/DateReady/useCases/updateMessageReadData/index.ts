import { MessageReadDataRepository } from "../../repositories/implementations/MessageReadDataRepository";
import { UpdateMessageReadDataController } from "./UpdateMessageReadDataController";
import { UpdateMessageReadDataUseCase } from "./UpdateMessageReadDataUseCase";

const messageReadDataRepository = MessageReadDataRepository.getInstance();

const updateMessageReadDataUseCase = new UpdateMessageReadDataUseCase(messageReadDataRepository);

const updateMessageReadDataController = new UpdateMessageReadDataController(updateMessageReadDataUseCase);

export { updateMessageReadDataController };
