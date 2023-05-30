import { MessageReadDataRepository } from "../../repositories/implementations/MessageReadDataRepository";
import { CreateMessageReadDataController } from "./CreateMessageReadDataController";
import { CreateMessageReadDataUseCase } from "./CreateMessageReadDataUseCase";

const messageReadDataRepository = MessageReadDataRepository.getInstance();

const createMessageReadDataUseCase = new CreateMessageReadDataUseCase(messageReadDataRepository);

const createMessageReadDataController = new CreateMessageReadDataController(createMessageReadDataUseCase);

export { createMessageReadDataController };
