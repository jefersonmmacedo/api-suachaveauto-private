import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { CreateMessageController } from "./CreateMessageController";
import { CreateMessageUseCase } from "./CreateMessageUseCase";

const messageRepository = MessageRepository.getInstance();

const createMessageUseCase = new CreateMessageUseCase(messageRepository);

const createMessageController = new CreateMessageController(createMessageUseCase);

export { createMessageController };
