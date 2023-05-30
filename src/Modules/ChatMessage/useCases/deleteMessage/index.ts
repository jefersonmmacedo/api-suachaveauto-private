import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { DeleteMessageController } from "./DeleteMessageController";
import { DeleteMessageUseCase } from "./DeleteMessageUseCase";

const messageRepository = MessageRepository.getInstance();
const deleteMessageUseCase = new DeleteMessageUseCase(messageRepository);
const deleteMessageController = new DeleteMessageController(deleteMessageUseCase);

export { deleteMessageController };
