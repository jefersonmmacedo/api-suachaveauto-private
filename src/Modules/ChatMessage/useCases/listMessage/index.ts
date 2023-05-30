import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { ListMessageController } from "./ListMessageController";
import { ListMessageUseCase } from "./ListMessageUseCase";

const messageRepository = MessageRepository.getInstance();

const listMessageUsecase = new ListMessageUseCase(messageRepository);

const listMessageController = new ListMessageController(listMessageUsecase);

export { listMessageController };
